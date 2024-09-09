function myMenuFunction() {
    var navMenu = document.getElementById("myNavMenu");
    if (navMenu.className.includes("responsive")) {
        navMenu.className = "nav-menu";
    } else {
        navMenu.className += " responsive";
    }
}

// Other JavaScript code
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// Scroll active section
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("myNavMenu").classList.remove("responsive");
    });
});

// document.getElementById('form-control').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // These IDs from the previous steps
//     const serviceID = 'service_1yl9u0b';
//     const templateID = 'template_anypu6u';

//     emailjs.sendForm(serviceID, templateID, '#form-control')
//         .then(() => {
//             alert('Message sent successfully!');
//         }, (err) => {
//             alert('Failed to send the message. Please try again later.', err);
//         });
// });