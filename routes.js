const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;
function configureRoutes(app, db){

   // configurar ruta inicial
app.get('/', function (request, res) {
    console.log('hola en la consola');
    // response.send('hola en chrome');
    // responder con un archivo
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });


  app.get('/store/:name/:id', function (req, res) {
    if(req.params.id.length != 24){
      res.redirect('/404');
      return;
    }

    const filter = {
      _id: {
        $eq: new ObjectId(req.params.id)
      }
    };
    // Get the documents collection
    const collection = db.collection('store');
    // Find some documents
    collection.find(filter).toArray(function(err, docs) {
      assert.equal(err, null);

      if(docs.length == 0){
        res.redirect('/404');
        return;
      }
      
      // crear el contexto
      var context = docs[0];
      // renderizar el archivo list.handlebars con el contexto creado
      res.render('product', context);
    });
  });


  // ruta para la lista de productos con handlebars
app.get('/store', function (req, res) {

    console.log(req.query);

    
    var filters = {
      $and: []
    };

    // si el usuario pidió filtrar por precio
    if(req.query.price_lt){
      filters.$and.push({
        price: {
          $lte: parseInt(req.query.price_lt)
        }
      });
    }

    // si el usuario pidió filtrar por precio
    if(req.query.price_gt){
      filters.$and.push({
        price: {
          $gte: parseInt(req.query.price_gt)
        }
      });
    }

    if (req.query.gender_) {
      filters.$and.push({
          gender: {
              $eq: (req.query.gender_)
          }
      });
  }

    if(req.query.search){
      filters.$and.push({
        name: {
          $regex: new RegExp(req.query.search, 'i'),
        }
      });
    }

    if(filters.$and.length === 0){
      delete filters.$and;
    }

    var sortings = {};
    if(req.query.sort == 'price_desc'){
      sortings.price = -1;
    }
    if(req.query.sort == 'price_asc'){
      sortings.price = 1;
    }


    // Get the documents collection
    const collection = db.collection('store');
    // Find some documents
    collection.find(filters).toArray(function(err, docs) {
        assert.equal(err, null);
        
        // objeto contexto
        var context = {
          list: docs,
        }
        // renderizar vista
        res.render('store', context);
    });


    app.get('/checkout', function (req, res) {
      console.log(req.query.error);
      var context = {
        showError: req.query.error,
      }
      res.render('checkout', context);
    });
  
    
    app.get('/cart', function(req, res) {
      var context = {};
      res.render('cart', context);

  });
    // recibir información del usuario
    app.post('/checkout', function (req, res) {
      console.log(req.body);
  
      var { firstname, address, products } = req.body;
  
      req.body.creation_date = new Date();
  
      if(!firstname || !address || !products){
        //res.send('error');
        res.redirect('/checkout?error=true');
        return;
      }
  
      req.body.products = JSON.parse(req.body.products);
  
      const collection = db.collection('orders');
      collection.insertOne(req.body);
      //res.send('test');
      res.redirect('/confirmation');
    });
  
    app.get('/confirmation', function(req, res) {
      var context;
      res.render('confirmation', context);
    });
      
  });
}

module.exports = configureRoutes;