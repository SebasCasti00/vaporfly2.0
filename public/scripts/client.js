var men = document.querySelector('.filter__men');
var women = document.querySelector('.filter__women');
var low = document.querySelector('.order__low');
var high = document.querySelector('.order__high');
var rating = document.querySelector('.order__rating');

// seleccionamos el elemento select
var select = document.querySelector('select');
// agregamos el listener de cambio
select.addEventListener('change', function(ev){
  // creamos la variable url partiendo del pathname "/tienda" o la ruta en la que estemos
  var url = location.pathname;
  // le agregamos el filtro ?price_lt y el valor
  url = url + '?price_lt=' + select.value;
  // navegamos a la nueva ruta con el filtro
  location.href = url;
});

$( "#slider-range" ).slider({
  range: true,
  min: 0,
  max: 250,
  step: 5,
  values: [ 0, 250 ],
  slide: function( event, ui ) {
    //console.log(ui.values)
    $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
  }
});

var button = document.querySelector('.searchbtn');
button.addEventListener('click', function(){
  var url = location.pathname;
  var valueA = $( "#slider-range" ).slider( "values", 0 );
  var valueB = $( "#slider-range" ).slider( "values", 1 );
  url = url + '?price_gt=' + valueA + '&price_lt=' + valueB;
  
  var input = document.querySelector('.search_input');
  var search = input.value;
  url = url + '&search=' + search;
  
  location.href = url;
});

men.addEventListener('click', function (event) {
  var url = location.pathname;
  url = url + '?gender_=' + ['men'];
  location.href = url;
});

women.addEventListener('click', function (event) {
  var url = location.pathname;
  url = url + '?gender_=' + ['women'];
  location.href = url;
});

rating.addEventListener('click', function (event) {
  var url = location.pathname;
  url = url + '?sort=rating';
  location.href = url;
});

low.addEventListener('click', function (event) {
  var url = location.pathname;
  url = url + '?sort=price_desc';
  location.href = url;
});

high.addEventListener('click', function (event) {
  var url = location.pathname;
  url = url + '?sort=price_asc';
  location.href = url;
});