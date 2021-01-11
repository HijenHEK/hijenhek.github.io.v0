

ScrollReveal().reveal('.intro', { delay: 100 , interval: 16, reset: true  });
ScrollReveal().reveal('.image', { delay: 200 , interval: 16, reset: true  });


ScrollReveal().reveal('.about ', { delay: 150 , interval: 16, reset: true  });

ScrollReveal().reveal('.skills .card ', { delay: 150 , interval: 50, reset: true  });


var age = document.querySelector('#age') ;
var date = new Date() ;
age.innerHTML ="" + (date.getFullYear() - 1996) ;


var nav = document.querySelector('.nav');

nav.addEventListener('click' , function (event) { 
    var active = document.querySelector('.nav-active');
    if(event.target != active) {
        event.target.classList += " nav-active";
        active.classList = "nav-item";
    }
 });