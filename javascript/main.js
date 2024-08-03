let slideIndex = 1 ;
let reminderingTime= 70000;
function setTime(){
    if(reminderingTime==0) return;
    let h=Math.floor(reminderingTime/3600);
    let m =Math.floor(reminderingTime%3600/60);
    let s=(reminderingTime%3600)%60;
    document.querySelector('#hours').innerHTML= h;
    document.querySelector('#minutes').innerHTML= m;
    document.querySelector('#seconds').innerHTML= s;
}
setInterval(()=>{
reminderingTime -= 1;
setTime()
}, 1000)



function setSlide(input,index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`)
    let slides = [...document.querySelector('.slides').children] ;
    slides.forEach((element)=>{
        element.classList.remove('active');
    })
    item.classList.add('active');
}

setInterval(()=>{
    slideIndex +=1;
    if(slideIndex==4){
        slideIndex=1;
    }
    setSlide(`slide${slideIndex}` , slideIndex)
} , 4000)