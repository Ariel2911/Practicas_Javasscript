const btn=document.getElementById('btn');
const btnX=document.getElementById('btn-x')
const modal=document.querySelector('.modal')

btn.addEventListener('click', ()=>{
    modal.classList.toggle('modal--show')
})

btnX.addEventListener('click',(e)=>{
    modal.classList.remove('modal--show')
})

