const menuIcon = document.getElementById('menu-icon');
const overlayMenu = document.getElementById('overlay-menu');
const closeIcon = document.getElementById('close-icon');

// Open menu 
menuIcon.addEventListener('click', () => {
    overlayMenu.classList.add('active');
});

// Close menu
closeIcon.addEventListener('click', () => {
    overlayMenu.classList.remove('active');
});