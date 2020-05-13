const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'Nike';
const client = new MongoClient(url);
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

app.use(express.urlencoded({ extended: true }));

const configureRoutes = require('./routes');

app.engine('handlebars', exphbs()); //Todos los archivos handlebars, los va a renderizar usando exphbs
app.set('view engine', 'handlebars'); //usar el motor de render Handlebars
app.use(express.static('public')); //static hace que la carpeta public sea PUBLICA (NO QUITAR)

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    configureRoutes(app, db);

});

app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
});





