var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

var route_index = require(__dirname + '/route/index');

app.use(express.static('public'));
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

app.set('layout', 'layout');
app.set('layout extractScripts', true);
app.use(expressLayouts);

app.use('/', route_index);

app.listen(3000, function() {
  console.log('Example App Listening on Port 3000');
});
