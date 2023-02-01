const btn = document.querySelector('.menu-button'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.menu-button--close');


document.addEventListener('click', ({ target }) => {
    if (target.classList.contains('menu__link')) {
        let element = document.querySelector(target.getAttribute('data-target'));
        window.scrollTo(
            0,
            window.scrollY + element.getBoundingClientRect().y - 80
        );
        menu.classList.add('menu--close');
    }
})

btn.addEventListener('click', () => {
    menu.classList.remove('menu--close');
})
closeBtn.addEventListener('click', () => {
    menu.classList.add('menu--close');
})