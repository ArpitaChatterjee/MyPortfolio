/*===== MENU SHOW =====*/
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

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
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
sr.reveal('.portfolio__img', { interval: 100 })

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { interval: 100 })
sr.reveal('.contact__input', { delay: 200 })
sr.reveal('.contact__button', { delay: 300 })



/*CONTACT ME*/
/*function _(id) {
    return document.getElementsById(id);
}

function submitForm() {
    _("mybtn").disable = true;
    _("status").innerHTML = "Please Wait...";
    var formdata = new FormData();
    formdata.append("name", _("name").value);
    formdata.append("email", _("email").value);
    formdata.append("message", _("message").value);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "contact.php");
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            if (ajax.responseText == "success") {
                _("my_form").innerHTML = '<h2>Thanks ' + _("name").value + ', your message has been sent.</h2>';
            } else {
                _("status").innerHTML = ajax.responseText;
                _("mybtn").disable = false;
            }
        }
    }
    ajax.send(formdata);
}*/



/*CONTACT ME*/

$('form.ajax').on('submit', function() {
    var that = $(this),
        url = that.attr('action'),
        type = that.attr('method'),
        data = {};

    that.find(['name']).each(function(index, value) {
        var that = $(this),
            name = that.attr('name'),
            val = that.val();

        data[name] = value;
    });
    $.ajax({
        url: url,
        type: type,
        data: data,
        success: function(response) {
            console.log(response);
        }
    });

    return false;
});