showMenu = () => {
    dropMenu = document.querySelector('.drop-menu');
    dropMenu.classList.remove('hidden');
};

hideMenu = () => {
    dropMenu = document.querySelector('.drop-menu');
    dropMenu.classList.add('hidden');
};

document.querySelector('.footer').innerHTML = 'Copyright © GSC - ' + new Date().getFullYear();
