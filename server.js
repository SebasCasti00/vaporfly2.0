// importar express
const express = require('express');
// importar path
const path = require('path');
// importart express-handlebars
const exphbs = require('express-handlebars');

// importar productos
const products = require('./products');

// instanciar servidor de express
const app = express();

// registrar motor de render para handlebars
app.engine('handlebars', exphbs());
// use el motor de render handlebars
app.set('view engine', 'handlebars');

// configurar carpeta public como estática o pública
app.use(express.static('public'));

// configurar ruta inicial
app.get('/', function (request, res) {
    console.log('hola en la consola');
    // response.send('hola en chrome');
    // responder con un archivo
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });

  // ruta para la lista de productos con handlebars
app.get('/store', function (req, res) {
    // objeto contexto
    var context = {
      title: 'El título cambiado',
      products: products,
    }
    // renderizar vista
    res.render('store', context);
  });

  // iniciar servidor en puerto 3000
app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
  });