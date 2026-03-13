/* HAMBURGER MENU */
const hamburgerBtn = document.querySelector('.hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.onclick = function() {
    const isClosed = mobileMenu.classList.contains('translate-x-full');
    
    if (isClosed) {
        mobileMenu.classList.remove('translate-x-full', 'invisible');
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.add('translate-x-full', 'invisible');  
        document.body.style.overflow = 'auto';
    }
};

/* KREDIT LIMITINIZI OYRENIN SECTION DAVAM ET BUTTON */
const btn = document.querySelector("#credit-limit #davam-et");
const check = document.querySelector("#credit-limit .davam-et-check");

btn.onclick = function() {
    check.classList.toggle("check-active");
}

