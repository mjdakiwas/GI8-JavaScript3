///// Menu JS ///// 
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');

menu.addEventListener('click', function () {
    navbar.style.display = getComputedStyle(navbar).display === 'none' ? 'block' : 'none';
})