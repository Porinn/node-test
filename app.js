var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

/* View Engine */
app.use(express.static('public'));
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

/* Express layouts*/
app.set('layout', 'layout');
app.set('layout extractScripts', true);
app.use(expressLayouts);

/* Route */
app.use('/', require(__dirname + '/route/index'));

/* Listen */
app.listen(3000, function() {
  console.log('Example App Listening on Port 3000');
});
