var slider  = document.getElementsByClassName("slider")[0];
var imageText = document.getElementsByClassName("image-text")[0];
// ---------------------------------------------------------------
// "<p>" + "Hello World!" + "</p>";
// ---------------------------------------------------------------
var ImageOne = "<div class='image-one'>" +  //i know this isn't always the most practical, but i wanted to show this fun feature

					"<div class='image-header'>" + 
						'Good Business Starts Here' +  
					"</div>" + 

					"<div class='lorem1'>" + 
						'Lorem ipsum dolor sit amet, Lorem ipsum' + 
					"<div>" +

					"<div class='button1'>" + 
						'MEET YOUR TEAM' + 
					"</div>" +

				"</div>"

var ImageTwo = 'Image Three'
var ImageThree = '<div class="image-two">Image Two</div>'
// ---------------------------------------------------------------
var image2 = new Image("assets/img/image1.jpg", ImageOne);
var image1 = new Image("assets/img/image2.jpg", ImageTwo);
var image3 = new Image("assets/img/image3.jpg", ImageThree);
// ---------------------------------------------------------------

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
function Image(fileName, imageName) {
	this.fileName = fileName;
	this.imageName = imageName
}
// ---------------------------------------------------------------
window.onload = function(){ //added this so slider wasn't empty onload
	slider.src = myImageslider.images[1].fileName;
	imageText.innerHTML = myImageslider.images[1].imageName;

}
setInterval(function() {
	if (currentImage === 2) {
		currentImage = -1
	}
	currentImage +=1; //counter
	slider.src = myImageslider.images[currentImage].fileName;
	imageText.innerHTML = myImageslider.images[currentImage].imageName;
	console.log(currentImage)
},1500);

