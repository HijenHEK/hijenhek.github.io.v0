

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

    // document.getElementById('contact-form').addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     // generate a five digit number for the contact_number variable
    //     this.contact_number.value = Math.random() * 100000 | 0;
    //     // these IDs from the previous steps
        
    //     emailjs.sendForm('service_rbgzsa4',  'template_cor3guk' , this , 'user_4LBlWTZucC4ejcWgv1UPF')
    //         .then(function() {
    //             console.log('SUCCESS!');
    //         }, function(error) {
    //             console.log('FAILED...', error);
    //         });
    // });
}