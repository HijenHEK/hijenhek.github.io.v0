

ScrollReveal().reveal('.intro', { delay: 150 , interval: 20, reset: true  });
ScrollReveal().reveal('.image', { delay: 100 , interval: 20, reset: true  });


ScrollReveal().reveal('.about ', { delay: 150 , interval: 20, reset: true  });


ScrollReveal().reveal('.skills .card ', { delay: 150 , interval: 20, reset: true  });
ScrollReveal().reveal('.work .card ', { delay: 150 , interval: 20, reset: true  });

ScrollReveal().reveal('.contact , .contact .group ', { delay: 150 , interval: 20, reset: true  });



// window.addEventListener('resize' , function(){
//     location.reload();
// })





 window.onload = function() {

    var age = document.querySelector('#age') ;
    var navToggler = document.querySelector('#nav-toggler') ;
    var date = new Date() ;
    age.innerHTML ="" + (date.getFullYear() - 1996) ;
    

    var nav = document.querySelector('.nav');
    var resetNav = function(){
        setTimeout(function(){
            nav.classList = "nav";

        },100)
    }
    nav.addEventListener('click' , function (event) { 
        var active = document.querySelector('.nav-active');
        if(event.target != active) {
            event.target.classList += " nav-active";
            active.classList = "nav-item";
            if(nav.classList.contains('nav-show')) {
                resetNav();

            }
        }
    });
    navToggler.addEventListener('click' , function (event) { 
        if(nav.classList.contains('nav-show')) {
            resetNav();
            
        }else {
            nav.classList +=" nav-show";
            setTimeout(function(){
                document.addEventListener('click' , resetNav )} , 50)

        }
        document.removeEventListener('click' , resetNav)
    });
    
    
}