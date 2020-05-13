var rotationImage = document.querySelector('.rotation__image');
var rotationInput = document.querySelector('.rotation__input');
function handleRotationInput () {
    var index = rotationInput.value;
    rotationImage.setAttribute('src', './images/shoe_' + index + '.png');
}
handleRotationInput();
rotationInput.addEventListener('input', handleRotationInput);

var btnRight = document.querySelector('.slider__btn--right');
var btnLeft = document.querySelector('.slider__btn--left');
var strip = document.querySelector('.slider__strip');
var slider = document.querySelector('.slider');
var posX = 0;
var width = slider.offsetWidth;
function handleBtnNextClick () {
    
    var quantity = strip.children.length;
    if(posX > -width * (quantity - 1)){
        posX -= width;
    } else {
        posX = 0;
    }
    strip.style.transform = 'translate(' + posX + 'px, 0px)';
}
btnRight.addEventListener('click', handleBtnNextClick);

function handleBtnPrevClick () {
    
    var quantity = strip.children.length;
    if(posX < 0){
        posX += width;
    } else {
        posX = -width * (quantity - 1);
    }
    strip.style.transform = 'translate(' + posX + 'px, 0px)';
}
btnLeft.addEventListener('click', handleBtnPrevClick);