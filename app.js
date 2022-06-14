const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo= document.querySelector('#navbar__logo');
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


const highlightMenu = () =>{
    const elem=document.querySelector('.highlight')
    const homeMenu=document.querySelector('#home-page')
    const aboutMenu=document.querySelector('#about-page')
    const contactMenu=document.querySelector('#contact-page')
    let scrollPos= window.scrollY

    if (window.innerWidth>980 && scrollPos <550){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth>980 && scrollPos <1250){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth>980 && scrollPos <1900){
        contactMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }
    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
      }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const hideMobileMenu =() =>{
    const menuBars= document.querySelector('.is-active')
    if (window.innerWidth <= 1000 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}
menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

function scrollUp(){
    const scrollUp= document.getElementById('scroll-up');
    if(this.scrollY>=560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp)


let progress =document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight-window.innerHeight;
window.onscroll =function(){
    let progressHeight = (window.pageYOffset / totalHeight)*100;
    progress.style.height= progressHeight +"%";
}