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

// comment and likes counter functionality 
const commentCounterController = (() => {
    _commentsList = document.querySelector('.comments');
    _commentCount = document.querySelector('.comment-count h5');
    _likesCount = document.querySelector('.like-count h5');
    _likesButton = document.querySelector('.like-count');
    _likesImage = document.querySelector('.like-count img');
    _submitButton = document.querySelector('.comment-form button');
    
    _commentCount.innerText = _commentsList.children.length;
    
    _submitButton.addEventListener('click', () => {
        _commentCount.innerText = _commentsList.children.length;
    });

    _likesButton.addEventListener('click', () => {
        _likesCount.innerText = '7';
        _likesCount.style.color = "#E69B59";
        _likesImage.src = "images/heart-orange.svg";
    });
})();