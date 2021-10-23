const reviews=[
    {
    id:0,
    img:"./assets/emily.jpg",
    name:"Emily R.",
    profesion: "Marketing Director",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus dolores illo beatae animi alias, est eius laudantium magnam expedita maxime."    
    },
    {
    id:1,
    img:"./assets/thomas.jpg",
    name:"Thomas S.",
    profesion:"Chief Operating Officer",
    text:"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"    
    },
    {
    id:2,
    img:"./assets/jennie.jpg",
    name:"Jennie F.",
    profesion:"Business Owner",
    text:"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."    
    },
    {
    id:3,
    img:"./assets/victor.jpg",
    name:"Victor M.",
    profesion:"Chief Operating Officer",
    text:"Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."    
    }    
]
const btn=document.getElementById('btn');
const testimonials=document.querySelector('.testimonials').children;
let num=0;

btn.addEventListener('click', e =>{
    switch (e.target.id) {
        case 'btn-prev':
                num--;
            break;
        case 'btn-next':
                num++;                
            break;
        case 'btn-random':                
                num=Math.floor(Math.random()*reviews.length);
            break;    
    }
    if(num>reviews.length-1){
        num=0
    }
    if(num<0){
        num=reviews.length-1
    } 
    
    // reviews.forEach(review in reviews){
    //     testimonial.attributes[0].textContent=reviews[num].img;
    //     testimonial.attributes[1].textContent="foto de "+reviews[num].name;
    //     testimonial.textContent=reviews[num].name;
    //     testimonial.textContent=reviews[num].profesion;
    //     testimonial.textContent=reviews[num].text;
    // }
    testimonials[0].attributes[0].textContent=reviews[num].img;
    testimonials[0].attributes[1].textContent="foto de "+reviews[num].name;
    testimonials[1].textContent=reviews[num].name;
    testimonials[2].textContent=reviews[num].profesion;
    testimonials[3].textContent=reviews[num].text;

})

