window.onscroll = function() {scroll()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scroll(){                                                /*for navbar*/
  if(window.pageYOffset >= 550){
    navbar.classList.add("sticky")
  } 
  else{
    navbar.classList.remove("sticky");
  }
}

var Index = 1;
pic(Index);

function currentSlide(n) {
  pic(Index = n);
}

function pic(n){                                                      /*for landing page*/
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length){
    Index = 1;
  }    
  if(n<1){
    Index = slides.length;
  }
  for(i=0;i<slides.length;i++){
      slides[i].style.display ="none";  
  }
  for(i=0;i<dots.length;i++){
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[Index-1].style.display = "block";  
  dots[Index-1].className += " active";
}