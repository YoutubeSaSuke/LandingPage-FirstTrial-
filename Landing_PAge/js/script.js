let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclic = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200,original:'top'});
sr.reveal('.hero-img',{delay:450,original:'top'});
sr.reveal('.icons',{delay:500,original:'left'});
sr.reveal('.scroll-down',{delay:500,original:'right'});

