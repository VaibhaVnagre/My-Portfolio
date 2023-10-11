// window.location.reload(`${document.getElementById('sec1')}`)
let home = document.getElementById('sec1');
let about = document.getElementById('sec2');
let project = document.getElementById('sec3');
let contact = document.getElementById('sec4');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');

window.addEventListener('load', ()=>{
    window.scrollTo(0 , home);
});


let resume = 'https://drive.google.com/file/d/1cSO4Oo11lFRUhEbxaA2h3Yq-DEBFmKML/view';

document.getElementById("resumeBtn").addEventListener('click' , ()=>{
    window.open(resume)
})



// var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

// TweenMax.from(".headerSec1 .logo",{
//     x:-20,
//     opacity:0,
//     ease:Expo.easeInOut,
// })

// TweenMax.staggerFrom("nav ul li" , 1,{
//     x:-20,
//     opacity:0,
//     delay:.2,
//     ease:Power3.easeInOut,
// },0.08)
 

TweenMax.from(".textContent1 .heading1 , .textContent1 p , .textContent1 .socialLinks" ,1, {
    y:20,
    delay:.3,
    opacity:0,
    ease:Expo.easeInOut
})


    TweenMax.from(".secondDiv ,.icons>ul>li", 1, {
        y:20,
        opacity:0,
        delay:1.6,
        ease:Expo.easeInOut,
        stagger:.2,
    })

  TweenMax.from(".imgimg",1, {
    y: 20,
    delay:.8,
    // duration: 1,
    ease:Expo.easeInOut,
    opacity:0,
    });

    gsap.utils.toArray('.section').forEach(section => {
        const trigger = section;
        const endTrigger = section.nextElementSibling || null; // Assumes the next sibling is the end trigger
        const end = 'bottom top';
    
        ScrollTrigger.create({
            trigger: trigger,
            start: 'top top',
            endTrigger: endTrigger,
            end: end,
            pin: true,
            pinSpacing: false,
        });
    });


    TweenMax.from(".sec2 .aboutImage , .sec2 .aboutContent", {
        scale:.5,
        opacity:0,
        duration:.7,
        
        scrollTrigger:{
            trigger:".sec2 .aboutImage",
            scroller:"body",
            start:"top 60%",
        }
    })
    TweenMax.from(".sec3 .projectHeading" ,{
    y:30,
    opacity:0,
    // duration:.5,
    delay:.7,
    stagger:0.1,
    ease:"bounce",
    scrollTrigger:{
            trigger:".sec3 .projectHeading h1",
            scroller:"body",
        }
  })

  TweenMax.from(".sec3 .card",{
     y:40,
    opacity:0,
    delay:.5,
    // duration:1,
    stagger:0.1,
    ease:"bounce",
    scrollTrigger:{
            trigger:".sec3 .projectHeading h1",
            scroller:"body",
        }
})

// TweenMax.from(".sec4",{
//       scale:.5,
// opacity:0,
// duration:.7,

// scrollTrigger:{
//     trigger:".sec2 .aboutImage",
//     scroller:"body",
// }
// })
