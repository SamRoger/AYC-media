



var slider  = document.getElementsByClassName("slider")[0];
var imageText = document.getElementsByClassName("image-text")[0];
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

var ImageTwo = 'Image Three' //different examples
var ImageThree = '<div class="image-two">Image Two</div>' //different examples
// ---------------------------------------------------------------
var image2 = new Image("assets/img/image1.jpg", ImageOne);
var image1 = new Image("assets/img/image2.jpg", ImageOne);
var image3 = new Image("assets/img/image3.jpg", ImageOne);
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
var dot1 = document.getElementsByClassName("dot1")[0]; 
var dot2 = document.getElementsByClassName("dot2")[0]; 
var dot3 = document.getElementsByClassName("dot3")[0];
// ---------------------------------------------------------------
window.onload = function(){ //added this so slider wasn't empty onload\
	slider.src = myImageslider.images[0].fileName;
	imageText.innerHTML = myImageslider.images[0].imageName;
}
// ---------------------------------------------------------------
setInterval(function() {
	if (currentImage === 2) {
		currentImage = -1 //added as fix so that every index[] of image showed
 	}
	slider.src = myImageslider.images[currentImage +=1].fileName; //this allowes me to add file path on a loop
	imageText.innerHTML = myImageslider.images[currentImage].imageName;
	slider.style.animation = 'fadeIn 3.5s infinite'; //i know if this keeps going long enough it would match up, i could've used snippet of code or frame work, but I wanted to write the whole slider.
},3500);
// ---------------------------------------------------------------
var dot = document.getElementsByClassName("dot"); //no "[0]"" so i capture all "dots"
var dot1 = document.getElementsByClassName("dot1")[0]; //no "[0]"" so i capture all "dots"
clicked = false
	for (let i = 0; i < dot.length; i++) { //in case I use "i" again by using "let" this "i" will remain within the scope of this block
		dot[i].addEventListener("click", function(){
				dot[i].classList.toggle("hero-selector")
		})
	}
// ---------------------------------------------------------------














































