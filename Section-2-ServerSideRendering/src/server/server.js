const path = require('path');
const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

import HelloWorld from "../client/components/helloworld/helloworld.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/static/', express.static(path.join(__dirname, '..', 'dist')));
app.get('/', (req, res) => {
    const rootComponent = ReactDOMServer.renderToString(<HelloWorld />);
    const html = `
      <!doctype html>
      <html>

      <head>
          <meta charset="utf-8">
          <title>Webpack Server App</title>
          <meta name="viewport" content="width=device-width,initial-scale=1">
      </head>

      <body>
          <div id="root">${rootComponent}</div>
          <script src="./static/client-bundle.js">${rootComponent}</script>
      </body>

      </html>
    `
    res.send(html);
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});