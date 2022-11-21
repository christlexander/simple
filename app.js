const menu = document.querySelector('#mobile-menu')
const link = document.querySelector('.navbar-menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active')
    link.classList.toggle('active')
})