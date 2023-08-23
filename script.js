function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotive()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>


  
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>


function firstpageanimation (){
  var tl = gsap.timeline();

  tl.from("#nav ", {
    y:20,
    duration :2,
    ease:Power3.easeInOut,
    opacity:0,

  })

  tl.to(".boundingelem", {
    y:0,
    duration :1.6,
    ease:Power4.easeInOut,
    opacity:.7,
    stagger:.3,
    delay:-1,
  })

  

  tl.from("#footerheading", {
    y:-20,
    duration :1,
    ease:Power4.easeInOut,
    opacity:0,
    stagger:.2,
    delay:-1,
  })
}
firstpageanimation()

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// jab mousemove kre toh cursor skew hoo or jab mouse ek dam tez chale toh bhi ek limit tk skew hona chaiye toh minimum or max scale define krna padega


// jab mousemove ho toh skew ho or jab mouse chalna band ho jaye toh skew hathako or nornal scale krdo mouse rukhne pe okay


var timerout;
function mouseskewhandle (){

  
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function(dets){
    // define default scale value;

    clearTimeout(timerout);
      
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev)
    yscale = gsap.utils.clamp(0.8, 1.2,  dets.clientY - yprev)

    xprev  =  dets.clientX ;
    yprev  =  dets.clientY ;

    cursormovewithmouse(xscale,yscale)  

    
     timerout =  setTimeout(function(){
        cursor.style.transform = `translate(${dets.clientX}px   , ${dets.clientY}px)   scale(1 , 1)`;
      } , 100)
  })
}

function cursormovewithmouse(xscale , yscale){
  var cursor = document.querySelector("#cursor");
window.addEventListener("mousemove", function(dets){
  cursor.style.transform = `translate(${dets.clientX}px -  200  , ${dets.clientY}px) - 300 scale(${xscale} , ${yscale})`;
})
 }
 cursormovewithmouse()
 mouseskewhandle()



 function page3animation(){
  var tl2 = gsap.timeline();

tl2.from("#page3 #top img", {
  scale:0.5,
  duration:1,
  ease:Power3.ease,

 
  scrollTrigger:{

    trigger: "#page3 #top img",
    scroller : "#main",
    // markers :true,
    start: "top 25%",
    end : "top 10%",
    scrub :3,

  }
} , 'a')


.from(" #top #text-about" , {
  opacity:0,
  duration:1,
  y:30,
  ease : Power3.ease,
  scrollTrigger:{

    trigger: "#top #text-about",
    scroller : "#main",
    // markers :true,
    start: "top 25%",
    end : "top 10%",
    scrub :3,

  }


} , 'a')


.from("#big-heading " , {
  opacity:0,
   y:60,
   
   scrollTrigger:{
    trigger:"#big-heading",
    scroller: "#main",
    scrub:2,

   }
})



.from("#about-footer" , 
{
  opacity:0,
  duration:0.5,
  y:30,

  scrollTrigger:{
    trigger:"#big-heading",
    scroller: "#main",
    scrub:2,

   }

  
})
 }

 page3animation();


 // teeno elemnet ko select kro phir teeno  uske baad teeno pe ek mouse move lagao jab mouse move hoye toh pata kro ki mouse move kaha pr hai mtlb ki mouse move hone pe uski x and y positions nikalo mtlb client x and client y ab mouse ki x and y position ke badle us image ko move kro  move kret waqt rotate kro or agar mouse kam speed se move hue toh kam rotate krna or agar mouse ek dam se zyada move kro toh rotate zyaaad krdena image ko ....



function page2animation(){
  
var element  = document.querySelectorAll(".elem");
element.forEach(function(elem){
  elem.addEventListener("mousemove", function(dets){
  var diff  = dets.clientY - elem.getBoundingClientRect().top;
  var previous = 0;
  var diffrot  = 0;

   diffrot  =  dets.clientX - previous;
   previous = dets.clientX;

  var tl3 = gsap.timeline();
    tl3.to(elem.querySelector("img") , {
      opacity:1,
      ease:Power3,
      left: dets.clientX,
      top : diff,
      transform : `skew(3deg)`,
    } , 's')

    tl3.to(elem.querySelector("h2") ,{
      x: 20,
      opacity:1,
    ease : Power3,
    duration: .5,
    } ,'s')



    tl3.to(elem.querySelector("h5") , {
      opacity:1,
      ease:Power3,
      duration:.5,

    } , 's')
  })


  elem.addEventListener("mouseleave", function(dets){
      gsap.to(elem.querySelector("img") , {
        opacity:0,
        ease:Power1.ease,

      })


      // gsap.to(elem.querySelector("img") , {
      //   opacity:1,
      //   ease:Power3,
        
      // } )
  
      
  
  
  
      


    })

})
}
page2animation();