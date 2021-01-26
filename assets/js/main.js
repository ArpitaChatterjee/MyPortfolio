const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, { delay: .5, top: "-100%", ease: Expo.easeInOut });
gsap.to(".second", 1.5, { delay: .7, top: "-100%", ease: Expo.easeInOut });
gsap.to(".third", 1.5, { delay: .9, top: "-100%", ease: Expo.easeInOut });

// IMG
gsap.from('.home__img', { opacity: 0, duration: 2, delay: 2, x: 60 })

// INFORMATION
gsap.from('.home__information', { opacity: 0, duration: 3, delay: 2.3, y: 25 })
gsap.from('.anime-text', { opacity: 0, duration: 3, delay: 2.3, y: 25, ease: 'expo.out', stagger: .3 })

// NAV ITEM
gsap.from('.nav__logo', { opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out' });
gsap.from('.nav__item', { opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out', stagger: .2 })

// SOCIAL
gsap.from('.home__social-icon', { opacity: 0, duration: 3, delay: 4, y: 25, ease: 'expo.out', stagger: .2 })


/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const responsive = {
        0: {
            portfolio__img: 1
        },

        600: {
            portfolio__img: 2
        },
        1000: {
            portfolio__img: 3
        }
    }
    // Carousal
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,

        animateOut: 'fadeOut',
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })




})

//*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 200,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', { delay: 100 })
sr.reveal('.home__img', { origin: 'right', delay: 200 })

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 250 })
sr.reveal('.about__subtitle', { delay: 150 })
sr.reveal('.about__profession', { delay: 200 })
sr.reveal('.about__text', { delay: 250 })
sr.reveal('.about__social-icon', { delay: 300, interval: 100 })

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', { distance: '20px', delay: 25, interval: 50 })
sr.reveal('.skills__img', { delay: 200 })

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', { interval: 50 })

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { interval: 10 })
sr.reveal('.contact__input', { delay: 20 })
sr.reveal('.contact__button', { delay: 30 })