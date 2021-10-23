const buttons=document.getElementById('buttons');
const number=document.querySelector('.text');
let count=0;
//Se establece la interacción con los botones
buttons.addEventListener('click', e =>{
    switch (e.target.id) {
        case 'buttonDecrease':
                count-=1;
            break;
        case 'buttonReset':
                count=0;
            break;
        case 'buttonIncrease':
                count+=1;
            break;    
    }
    //Cambia el color del número dependindo su valor
    if(count<0){
        number.classList.remove('colorOne')
        number.classList.add('colorTwo')
    }
    else{
        number.classList.remove('colorTwo')
        number.classList.add('colorOne')
    }

    //Establece el valor que se va a mostrar en pantalla
    number.textContent=count

})

