// mobile-navigation functionality
const mobileNavigationController = (() => {
    const _mobileNav = document.querySelector('.navigation__wrapper');
    const _dropDown = document.querySelector('.drop-down');
    const _navButton = document.querySelector('.mobile-menu');

    _navButton.addEventListener('click', () => {
        _dropDown.style.transform = "scale(75)";
        _mobileNav.style.display = "flex";
    })
})();

// comment functionality
const blogPost1Controller = (() => {
    const _button = document.querySelector('.comment-form button');
    const _content = document.querySelector('.comment-form textarea');
    const _name = document.querySelector('.comment-form input');
    const _comments = document.querySelector('.comments');

    _button.addEventListener('click', (event) => {
        event.preventDefault();

        const _newComment = document.createElement('DIV')
        _newComment.classList.add('comment');

        const _newCommentName = document.createElement('H4');
        _newCommentName.classList.add('comment-name');
        _newCommentName.innerText = _name.value;

        const _newCommentDate = document.createElement('SPAN');
        _newCommentDate.classList.add('comment-date');
        _newCommentDate.innerText = moment().format('l');
        
        const _newCommentContent = document.createElement('P');
        _newCommentContent.classList.add('comment-content');
        _newCommentContent.innerText = _content.value;


        _newComment.appendChild(_newCommentName);
        _newComment.appendChild(_newCommentDate);
        _newComment.appendChild(_newCommentContent);

        _comments.appendChild(_newComment);

        _content.value = "";
        _name.value = "";
    });
})();