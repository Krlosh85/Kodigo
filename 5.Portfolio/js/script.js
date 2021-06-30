/*Menu*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*Scroll Reveal Animation using Scroll Reveal Library*/ 
const scrollr = ScrollReveal({
    origion: 'top',
    distance: '70px',
    duration: 2000,
    reset:true
})


/*Scroll Home*/

scrollr.reveal('.home-title',{})
scrollr.reveal('.button', {delay:200})
scrollr.reveal('.home-img', {delay:200})
scrollr.reveal('.home-social-icon', {interval:200})

/*Scroll About*/
scrollr.reveal('.about-img',{})
scrollr.reveal('.about-subtitle', {delay:200})
scrollr.reveal('.about-text', {delay:300})

/*Scroll Skills*/
scrollr.reveal('.skills-subtitle',{})
scrollr.reveal('.skills-text', {delay:200})
scrollr.reveal('.skills-data', {interval:200})

/*Scroll Projects*/
scrollr.reveal('.projects-img', {interval:200})

/*Scroll Contact*/
scrollr.reveal('.contact-input', {interval:200})

