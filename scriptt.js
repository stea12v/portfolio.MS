
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}









document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    // Function to change the active link
    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
});


let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');




const typed = new Typed('.typewriter', {
    strings: ['MOUSTAFA SARMINI'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
   






ScrollReveal({ 
    distance: '40px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about img', { origin: 'top' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'top' });












