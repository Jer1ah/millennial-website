// mobile-navigation functionality
const mobileNavigationController = (() => {
    const _mobileNav = document.querySelector('.navigation__wrapper');
    const _dropDown = document.querySelector('.drop-down');
    const _navButton = document.querySelector('.mobile-menu');
    const _navButtons = document.querySelectorAll('.navigation__listItem a');

    _navButton.addEventListener('click', () => {
        if(window.getComputedStyle(_mobileNav).display === 'none') {
            _dropDown.style.transform = "scale(65)";
            _mobileNav.style.display = "flex";
        } else {
            _dropDown.style.transform = "scale(1)";
            _mobileNav.style.display = "none";
        }
    });

    for(let i = 0; i < _navButtons.length; i++) {
        _navButtons[i].addEventListener('click', () => {
            if(window.innerWidth <= 825) {
                _dropDown.style.transform = "scale(1)";
                _mobileNav.style.display = "none";
            }
        });
    }

    document.querySelector('.contact-button').addEventListener('click', () => {
        if(window.innerWidth <= 825) {
            _dropDown.style.transform = "scale(1)";
            _mobileNav.style.display = "none";
        }
    });

    window.onresize = () => {
        if(window.innerWidth > 825) {
            _dropDown.style.transform = "scale(1)";
            _mobileNav.style.display = "flex";
        } else {
            _mobileNav.style.display = "none";
            _dropDown.style.transform = "scale(1)";
        }
    }
})();

// form submit functionality
const formSumbitController = (() => {
    _contactForm = document.querySelector('.contact__form form');
    _formButton = document.querySelector('.contact__form button');
    _submittedTitle = document.querySelector('.contact__form h2');
    
    _formButton.addEventListener('click', () => {
        _contactForm.style.display = "none";
        _submittedTitle.style.display = "inline-block";
    });
})();

// newsletter submit functionality 
const newsletterSubmitController = (() => {
    _newsletterButton = document.querySelector('.newsletter button');

    _newsletterButton.addEventListener('click', () => {
        console.log('it worked');
    });
})();