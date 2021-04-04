//mobile drop-down nav functionality

// const dropDownNavController = (function() {
//     const _wrapper = document.querySelector('.navigation__wrapper');
//     const _dropDown = document.querySelector('.drop-down');
//     const _navButton = document.querySelector('.mobile-menu');
//     const _navList = document.querySelector('.navigation__list');
//     const _contactButton = document.querySelector('.navigation .contact-button');

//     _navButton.addEventListener('click', () => {
//         if(window.getComputedStyle(_navList).visibility === "hidden") {
//             _dropDown.style.transform = 'scale(70)';
//             _navList.style.visibility = 'visible';
//             _contactButton.style.visibility = 'visible';
//         } else {
//             _dropDown.style.transform = 'scale(1)';
//             _navList.style.visibility = 'hidden';
//             _contactButton.style.visibility = 'hidden';
//         }
//     });
// }());