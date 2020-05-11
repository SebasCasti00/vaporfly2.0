const express = require('express');
const exphs = require('express-handlebars');
/*
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const createRoutes = require('./routes.js');


const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.engine('handlebars', exphs());
app.set('view engine', 'handlebars');


MONGO WTF OJO CON EL LOCALHOST ACA..
const url= 'mongo://localhost:27017;
const dbName = 'store';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});


client.connect(function(err){
    assert.equal(null, err);

    console.log('conexión');

    const db = client.db(dbName);

    createRoutes(app, db);

    app.listen(3000, ()=>{
        console.log("Iniciado puerto 3k");
    });
});
*/

const app = express();


