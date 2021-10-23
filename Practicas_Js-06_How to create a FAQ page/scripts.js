//Opción 1: se despliega y se contrae el texto precionando el boton que le corresponde

// const btns=[...document.querySelectorAll('.faq__btn')];

// btns.forEach(btn =>{
//     btn.addEventListener('click', ()=>{
//         btn.parentElement.nextElementSibling.classList.toggle('faq__text--show')
//         btn.classList.toggle('faq__btn--show')
//     })
// })


//Opción 2: cuando se preciona un boton se despliega o contrae el continido que le corresponde y se contraen todos los demas

const btns=[...document.querySelectorAll('.faq__btn')];
btns.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        btns.forEach(btn =>{
            if(btn==e.target){                
                btn.parentElement.nextElementSibling.classList.toggle('faq__text--show')
                btn.classList.toggle('faq__btn--show')                        
            }
            else{
                btn.parentElement.nextElementSibling.classList.remove('faq__text--show')
                btn.classList.remove('faq__btn--show')
            }            
        })
    })
})
