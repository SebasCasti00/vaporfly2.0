const assert = require('assert');

function configureRoutes(app, db){

   // configurar ruta inicial
app.get('/', function (request, res) {
    console.log('hola en la consola');
    // response.send('hola en chrome');
    // responder con un archivo
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });

  // ruta para la lista de productos con handlebars
app.get('/store', function (req, res) {

    if(req.query.price_lt){}

    if(req.query.price_gt){}

    if(req.query.search){}

    // Get the documents collection
    const collection = db.collection('products');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        
        // objeto contexto
        var context = {
          title: 'El título cambiado',
          products: products,
        }
        // renderizar vista
        res.render('store', context);
    });
      
  });
}

module.exports = configureRoutes;