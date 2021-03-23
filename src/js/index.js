
import css from '../css/style.css'

import ScrollReveal from 'scrollreveal';

import 'boxicons';



ScrollReveal().reveal('.intro', {delay : 300 , interval : 200 });
ScrollReveal().reveal('.image', {delay : 500 , interval : 200 });
ScrollReveal().reveal('.about ', {delay : 300 , interval : 200 });
ScrollReveal().reveal('.skills .card ', {delay : 300 , interval : 200 });
ScrollReveal().reveal('.work .card ', {delay : 300 , interval : 200 });
ScrollReveal().reveal('.contact , .contact .group ', {delay : 300 , interval : 200 });



function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId= setTimeout(function(){
        method();
    }, delay);
}



window.onload = function() {
    var loader = document.querySelector('#loader');
    var loading = document.querySelector('.loading');
    loader.classList.remove('loader') ;
    loader.classList.add('none') ;
    loading.classList.remove('loading');


    var age = document.querySelector('#age') ;
    var navToggler = document.querySelector('#nav-toggler') ;
    var date = new Date() ;
    age.innerHTML ="" + (date.getFullYear() - 1996) ;
    var nav = document.querySelector('nav.nav');
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
    
    
    
    document.addEventListener('scroll' , function(){
        debounce(()=>{

            document.querySelectorAll('.nav-item').forEach(function(i){
                let top = document.scrollingElement.scrollTop;
                var cur = []
                document.querySelectorAll('.section').forEach(function(i){
                    
                    if(i.offsetTop <= top + document.querySelector('.header').clientHeight *2 ){
                        cur.push(i)
                    }
                });
                cur = cur[cur.length-1];
                var active = document.querySelector('.nav-active');
                let item = i.getAttribute("href").substring(1);
                cur = cur.getAttribute('id');
                if(i != active && item == cur) {
                    
                    i.classList.add('nav-active');
                    active.classList.remove('nav-active');
                    if(nav.classList.contains('nav-show')) {
                        resetNav();
                        
                    }
                    if (window.history.pushState) {
                        //prevents browser from storing history with each change:
                        window.history.pushState({}, null , '#'+cur);
                     }
                }
            });
            
        }, 500);
    })
        
        
    


}