const menu = document.querySelector('.menu');
const x = document.querySelector('.logo__symbol');
const close = document.querySelector('.closeNav');

function toggleOpen() {
    menu.classList.remove('hide');
}

function toggleClose() {
    menu.classList.add('hide');
}

x.addEventListener('click', toggleOpen);
close.addEventListener('click', toggleClose);

