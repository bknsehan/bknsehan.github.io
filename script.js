const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        const currentState = tag.getAttribute('data-state');
        if (currentState === 'unselected') {
            tag.setAttribute('data-state', 'selected');
            tag.classList.add('selected');
        } else if (currentState === 'selected') {
            tag.setAttribute('data-state', 'excluded');
            tag.classList.remove('selected');
            tag.classList.add('excluded');
        } else {
            tag.setAttribute('data-state', 'unselected');
            tag.classList.remove('excluded');
        }
    });
});
