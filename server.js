const express = require('express');
const exphs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphs());
app.set('view engine','handlebars');

app.get('/', function(req, res){

    res.send('hola');
});

app.listen(3000, function(){
    console.log('aiuda.');
});