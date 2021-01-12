

ScrollReveal().reveal('.intro', { delay: 150 , interval: 50, reset: true  });
ScrollReveal().reveal('.image', { delay: 200 , interval: 50, reset: true  });


ScrollReveal().reveal('.about ', { delay: 200 , interval: 50, reset: true  });

ScrollReveal().reveal('.skills .card ', { delay: 200 , interval: 50, reset: true  });
ScrollReveal().reveal('.work .card ', { delay: 200 , interval: 50, reset: true  });
ScrollReveal().reveal('.contact , .contact .group ', { delay: 200 , interval: 50, reset: true  });







 window.onload = function() {

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

}