const navEl = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
        navEl.classList.add('navbar-scrolled')
    } else if (window.scrollY < 80) {
        navEl.classList.remove('navbar-scrolled')
    }

})

AOS.init({
    duration: 1000
});