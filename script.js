addEventListener("DOMContentLoaded", () => {
    const menuMobile = document.querySelector('#hamburgerMenu')
    const menuList = document.querySelector('#menuList')
    const menuLinks = document.querySelectorAll('.menu-link')

    menuMobile.addEventListener('click', () => {
        menuList.classList.toggle('menuOpen')
    })

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', () => {
            menuList.classList.remove('menuOpen')
        })
    }
});