

ScrollReveal().reveal('.intro', { delay: 300 , interval: 16, reset: true  });
ScrollReveal().reveal('.image', { delay: 450 , interval: 16, reset: true  });


ScrollReveal().reveal('.about .heading', { delay: 300 , interval: 16, reset: true  });
ScrollReveal().reveal('.about .content', { delay: 450 , interval: 16, reset: true  });

ScrollReveal().reveal('.about .action', { delay: 650 , interval: 16, reset: true  });

var age = document.querySelector('#age') ;
var date = new Date() ;
age.innerHTML ="" + (date.getFullYear() - 1996) ;
