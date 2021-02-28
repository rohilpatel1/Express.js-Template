const app = require('express')();
const ejs = require('ejs');

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(require('express').static('public'));
app.use(require('./util/router'))

app.listen(3000, _ => console.log('Listening on port 3000'));