


// Stickyy

window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");

    nav.classList.toggle("fixed", window.scrollY > 200);

});



// Mobile Navigation

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.6}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');

    });
}
navSlide();




// Slideshow

let slides = document.querySelectorAll('.slide-container');
let index = 0;
var slideImg = document.getElementById("slideImg");

// var images = ["Pic-7", "Pic-1", "Pic-3",]

var i = 0, len = slides.length;


setInterval(function(){
    //slideImg.src ="images/" +images[i]+ ".jpg";
    
    if(i < slides-1) i++;

    else i = 0;
},3000);



function auto_next() {

    return setInterval(() => {
        next(false);
    }, 6500);

}

const start_auto_next = auto_next();
var isWaiting = false;


function wait_auto_next() {
    
    if(!isWaiting) {
        clearInterval(start_auto_next);
        isWaiting = true;
        console.log('Now waiting');
    }

    setTimeout(() => {
        if (isWaiting) {
            const start_auto_next = auto_next();
            isWaiting = false;
            console.log('Wait end');
        }
    }, 3000);

}


function next(isPause){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
    
    isPause && wait_auto_next();
     
}

1
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    
    wait_auto_next();

}


// Scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400 
}); 


// right
ScrollReveal().reveal('.welcome, .heading, .slide-right ', { delay: 500, origin: 'right' });



// bottom
ScrollReveal().reveal('.slide-up', { delay: 500, origin: 'bottom' });


// bottom frames
ScrollReveal().reveal('.prospectus , .history , .enrol, .choose, hr', { delay: 100, origin: 'bottom' });


// Line animation
ScrollReveal().reveal('.lines hr', { delay: 500, origin: 'bottom', interval: 200 });


// left
ScrollReveal().reveal('.slide-left, .enrol p', { delay: 500, origin: 'left' });



ScrollReveal().reveal('.boxes div', { delay: 500, origin: 'bottom', interval: 200 });


ScrollReveal().reveal('.sections div', { delay: 600, origin: 'bottom', interval: 200 });


ScrollReveal().reveal('.lower-footer .footer-logo', { delay: 600, origin: 'left' });


ScrollReveal().reveal('.copy', { delay: 600, origin: 'bottom' });



ScrollReveal().reveal('.socials a', { delay: 600, origin: 'bottom', interval: 200 });


// Testmonial Swiper Slide 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  




  // Type JS

var typed = new Typed('#contact-title', {
    strings: [
    
    'Welcome To Bosom Private Schools', 
    'Best in Nigeria',
    'The Best in the world'
    ],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    backDelay: 2000,
    });




