//mobile drop-down nav functionality
const dropDownNavController = (function() {
    const _dropDown = document.querySelector('.navigation__wrapper');
    const _navButton = document.querySelector('.mobile-menu');
    const _navList = document.querySelector('.navigation__list');
    const _contactButton = document.querySelector('.navigation .contact-button');

    _navButton.addEventListener('click', () => {
        if(_dropDown.style.display === 'none') {
            _dropDown.style.display = "flex";
            _navList.style.display = "flex";
            _contactButton.style.display = "inline-block";
        } else {
            _dropDown.style.display = "none";
            _navList.style.display = "none";
            _contactButton.style.display = "none";
        }
    });
}());