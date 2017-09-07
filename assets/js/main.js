var slider  = document.getElementsByClassName("slider")[0];
// ---------------------------------------------------------------
var currentImg = 0;
// ---------------------------------------------------------------
var image1 = new Image("assets/img/image1.jpeg");
var image2 = new Image("assets/img/image2.jpg");
var image3 = new Image("assets/img/image3.jpeg");
// ---------------------------------------------------------------
var myImageslider = new Imageslider();
// ---------------------------------------------------------------
myImageslider.images.push(image1);
myImageslider.images.push(image2);
myImageslider.images.push(image3);
// ---------------------------------------------------------------
function Imageslider(){
	this.images = [];
	currentImage = 0;
}
// ---------------------------------------------------------------
function Image(fileName) {
	this.fileName = fileName;
}
// ---------------------------------------------------------------
window.onload = function(){ //added this so slider wasn't empty onload
	slider.src = myImageslider.images[1].fileName;
}
setInterval(function() {
	if (currentImage === 2) {
		currentImage = -1
	}
	currentImage +=1; //counter
	slider.src = myImageslider.images[currentImage].fileName;
	
},2000);

