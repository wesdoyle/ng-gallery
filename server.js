const express = require('express');
const app = express();

// run the application by serving up the
// static files in the dist directory
app.use(epxress.static(__dirname + '/dist'));

// start the app by listening on the default
// Heroku port

app.listen(process.env.PORT || 8080);

// For routing, Angular apps employ PathLocationStrategy
// by default, meaning that there won't be any hases in
// the URL. This is generally cleaner, but it comes at the
// cose of sub-routes not being accesible when someone navigates
// directly to them. We just need to configure the server properly

const path = require('path');

// for all GET requests, send back index.html
// so that PathLocationStrategy can be used

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

