const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const port = process.env.PORT || 5000;
const app = express();

app.use('/', serveStatic(path.join(__dirname, "/dist")));

app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html")
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
});
