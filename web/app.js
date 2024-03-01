//movement animation to happen 
const card = document.querySelector(".card");
const container = document.querySelector(".container");



//animation event
container.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) /15;
   let yAxis = (window.innerHeight / 2 - e.pageY) /15;
   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate in
container.addEventListener("mouseenter", e =>{
   card.style.transition = 'none';
 //popout
 me.style.transform = "translateZ(150px)rotateZ( -35deg";
 nuel.style.transform = "translatez(-100px) rotateZ( -35deg)" ;
 Eh.style.transform = "translateZ(150px) rotateZ( -35deg";
   
});

//animate out
container.addEventListener("mouseleave", e =>{
    card.style.transition = 'all 0.6s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
 nuel.style.transform = 'translateZ(0px)';
 
});

