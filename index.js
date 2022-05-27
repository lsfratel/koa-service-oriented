require('dotenv').config();
const cluster = require('cluster');
const os = require('os');
const koa = require('./loaders/koa');

(async () => {
  const app = koa.load();

  if (process.env.NODE_ENV !== 'development') {
    if (cluster.isMaster) {
      console.log(`Listening on http://0.0.0.0:${process.env.PORT}`);

      for (let i = 0; i < os.cpus().length; i++) cluster.fork();

      cluster.on('online', (worker) => {
        console.log(`Worker ${worker.process.pid} is online`);
      });

      cluster.on('exit', (worker, exitCode) => {
        console.log(`Worker ${worker.process.id} exited with code ${exitCode}`);
        console.log('Starting a new worker');
        cluster.fork();
      });
    } else {
      app.listen(parseInt(process.env.PORT), '0.0.0.0');
    }
  } else {
    app.listen(parseInt(process.env.PORT), '0.0.0.0', () => {
      console.log(`Listening on http://127.0.0.1:${process.env.PORT}`);
    });
  }
})();
