var slider  = document.getElementsByClassName("slider")[0];
var imageText = document.getElementsByClassName("image-text")[0];
// ---------------------------------------------------------------
var ImageOne = "<div class='image-one'>" +  //i know this isn't always the most practical, but i wanted to show this for fun
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
// ---------------------------------------------------------------
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
	dot1.classList.add("hero-selector")
	dot2.classList.remove("hero-selector")
}
// ---------------------------------------------------------------
setInterval(function() {
var dot = document.getElementsByClassName("dot"); 
	if (currentImage === 2) {
		currentImage = -1 //added as fix so that every index[] of image showed/i have an issue somewhere else
 	}
	slider.src = myImageslider.images[currentImage +=1].fileName; //this allowes me to add file path on a loop
	imageText.innerHTML = myImageslider.images[currentImage].imageName;
	slider.style.animation = 'fadeIn 3.5s infinite'; //i know if this keeps going long enough it would match up, i could've used snippet of code or frame work, but I wanted to write the whole slider OOJS.
		function heroSelector(){
			if (dot1.classList.contains("hero-selector")){
				dot1.classList.remove("hero-selector")
				dot2.classList.remove("hero-selector")
				dot3.classList.remove("hero-selector")
				dot2.classList.add("hero-selector")
			} else if (dot2.classList.contains("hero-selector")){
				dot2.classList.remove("hero-selector")
				dot1.classList.remove("hero-selector")
				dot3.classList.remove("hero-selector")
				dot3.classList.add("hero-selector")
			} else if (dot3.classList.contains("hero-selector")){
				dot3.classList.remove("hero-selector")
				dot2.classList.remove("hero-selector")
				dot1.classList.remove("hero-selector")
				dot1.classList.add("hero-selector")
			}
		}
	heroSelector();
},3500);
// ---------------------------------------------------------------
var dot = document.getElementsByClassName("dot");
var slider  = document.getElementsByClassName("slider")[0];

dot1.addEventListener("click", function(){
	slider.src = "assets/img/image2.jpg"
	dot1.classList.add("hero-selector")
	if (dot2.classList.contains("hero-selector") || dot3.classList.contains("hero-selector")){
		dot2.classList.remove("hero-selector")
		dot3.classList.remove("hero-selector")
	}
})
dot2.addEventListener("click", function(){
	slider.src = "assets/img/image1.jpg"
	dot2.classList.add("hero-selector")
	if (dot1.classList.contains("hero-selector") || dot3.classList.contains("hero-selector")){
		dot1.classList.remove("hero-selector")
		dot3.classList.remove("hero-selector")
	}
})
dot3.addEventListener("click", function(){
	slider.src = "assets/img/image3.jpg"
	dot3.classList.add("hero-selector")
	if (dot1.classList.contains("hero-selector") || dot2.classList.contains("hero-selector")){
		dot1.classList.remove("hero-selector")
		dot2.classList.remove("hero-selector")
	}
})
// ---------------------------------------------------------------
var burgerContainer = document.getElementsByClassName("burger-container")[0];
var burgerMenuContainer = document.getElementsByClassName("burger-menu-container")[0];
var burgerMenu = document.getElementsByClassName("burger-menu")[0];
var headerGenInq2 = document.getElementsByClassName("header-gen-inq2")[0];
var close = document.getElementsByClassName("close")[0];
// ---------------------------------------------------------------
burgerContainer.addEventListener("click", function(){
	burgerMenuContainer.style.display = "block";
	burgerMenuContainer.style.animation = "burgerMenuFadeIn 1s";
	burgerMenu.style.display = "block";
})
// ---------------------------------------------------------------
close.addEventListener("click", function(){
	burgerMenuContainer.style.animation = "burgerMenuFadeOut 1s";
	setTimeout(function(){
		burgerMenuContainer.style.display = "none"
	},1000)
})
// ---------------------------------------------------------------
























