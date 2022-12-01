/* ------ Menu ------ */

function MenuActive() {
    let BtnMenu = document.querySelector('.menu-nav'),
        navList = document.querySelector('.list-item'),
        menuClose = document.querySelector('.close-nav'),
        btnItem = document.querySelector('.item');

    BtnMenu.onclick = function () {
        navList.classList.add('menu-active');
    };

    menuClose.onclick = function () {
        navList.classList.remove('menu-active');
    };
    
}