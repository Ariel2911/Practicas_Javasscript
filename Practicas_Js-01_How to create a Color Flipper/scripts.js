const colors= ["Red", "Darkblue", "Pink","Teal","Darkgoldenrod","Darkmagenta"];
const textColor=document.getElementById('textColor');
const classColor=document.querySelector('.color');
const button=document.getElementById('button');
const getRandemNumber= ()=>{
    return Math.floor(Math.random(1)*colors.length)
}

button.addEventListener('click',()=>{
    const randomNumber= getRandemNumber(); 

    classColor.setAttribute("style","background-color:"+colors[randomNumber]+";")
    textColor.textContent=colors[randomNumber]
    textColor.style.color=colors[randomNumber]
})

