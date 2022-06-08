const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


function scrollUp(){
    const scrollUp= document.getElementById('scroll-up');
    if(this.scrollY>=560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp)