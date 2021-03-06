const express = require('express');
const next = require('next');

const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

const apiRouter = require('./routes/api');

app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json());
    
    server.use('/api', apiRouter);

    server.get('/a', (req, res) => {
      return app.render(req, res, '/a', req.query)
    })

    server.get('/b', (req, res) => {
      return app.render(req, res, '/b', req.query)
    })

    server.all('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
})
