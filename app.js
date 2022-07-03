$(window).on('beforeunload', function() {
  $('body').hide();
  $(window).scrollTop(0);
});

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

function smoothscroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime){
    if(startTime === null){
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window,scrollTo(0, run);
    if(timeElapsed < duration){
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };

  requestAnimationFrame(animation);
}

var to_projects = document.querySelector(".to_projects");
var to_resume = document.querySelector(".to_resume")
to_projects.addEventListener('click', function(){
  smoothscroll("#projects", 500);
});
to_resume.addEventListener('click', function(){
  if(window.innerWidth < 480){
    smoothscroll(".Ctc", 1000); 
  }
  else{
    smoothscroll("#resume_card", 1000);
  }
});

let projectCardContainers = document.querySelectorAll('.project_card_container');
let projectCards = document.querySelectorAll('.project_card');

let isTurned = [false, false, false];

for (let i = 0; i < 3; i++) {
  projectCardContainers[i].addEventListener("click", (e) => {
    if (!isTurned[i]) {
      isTurned[i] = true;
      projectCards[i].style.transform = "rotateX(180deg)"; 
    } else {
      isTurned[i] = false;
      projectCards[i].style.transform = "rotateX(0deg)";
    }
  }) 
}