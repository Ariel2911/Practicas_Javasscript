const btnMenu=document.getElementById('btn-menu');
const aside=document.querySelector('.aside');

// Activación del menú y del aside
btnMenu.addEventListener('click',()=>{
    btnMenu.classList.toggle('btn-menu--active')
    aside.classList.toggle('aside--active')
})