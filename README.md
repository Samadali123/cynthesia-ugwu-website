<!-- The code you provided is an HTML document. It defines the structure and content of a web page. It
includes various HTML tags such as `<head>`, `<body>`, `<div>`, `<h1>`, `<img>`, `<p>`, and
`<script>`. -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cynthia - ugwu </title>
    <link rel="shortcut icon" href="./girl image.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css">

</head>
<body>

    <div id="cursor"></div>
    <div id="nav">
        <a href="#">cynthia ugwu</a>
        <h3>menu+</h3>

    </div>


    
  <div id="main">
     <div id="home" data-scroller-section  data-scroller-speed ="3"> 
        
         <div id="heading">
            <div class="bounding">
                <h1 class="boundingelem">product</h1>
            </div>
           <div class="blocktext">
           <div class="bounding">
            <h1 id="secondh1" class="boundingelem">designer</h1>
           </div>
           <div class="bounding">
            <h5 class="boundingelem">based in toronto</h5>
           </div>
           </div>
            
         </div>

         <div id="iconsheading">
            
            <div class="bounding">
                <h4  class="boundingelem">available for freelance</h4>
            </div>
           
            <div class="bounding">
                <h4  class="boundingelem">work from may "23"</h4>
            </div>
           

         </div>

         <div id="footerheading">
            <h3>currently working at yml <i class="ri-arrow-right-up-line"></i></h3>
            <h3>protopie ambassador <i class="ri-arrow-right-up-line"></i></h3>

            <div id="icons">
                <div class="icon">
                    <i class="ri-arrow-down-line"></i>
                </div>
                <div class="icon">
                    <i class="ri-arrow-down-line"></i>
                </div>
             </div>


         </div>

    </div> 
    
     <div id="page2" data-scroller-section data-scroller-speed="3" >
        <div class="elem">
            <img src="./character.png" alt="">
            <h2>the plug</h2>
            <h5>2022</h5>

        
        </div>


        <div class="elem">
            <img src="./darkphone.png" alt="">
            <h2>ixperience</h2>
            <h5>2022</h5>


        </div>


        <div class="elem" clas="elemlast">
            <img src="./whitphone.png" alt="">
            <h2>hudu</h2>
            <h5>2021</h5>
          

        </div>
         
    </div> 
    

    <div id="page3" data-scroller-section  data-scroller-speed="3"> 
          <div id="top">
            <img src="./girl image.png" alt="">
            <div id="text-about">
                <h3>(about me)</h3>
                <p>I'm a product designer with a passion for creating  <br>products that not only look good but also solve real <br> problems. When I'm not sketching ideas on paper, you  <br>can find me binge-watching a Netflix series or playing <br> video games. My design philosophy is simple: make it <br> visually appealing, functional, and bring a smile to <br> people's faces. I'm the designer you want on your team <br> if you want to make people say 'I need that in my life!'.</p>
                <button>let's talk</button>
    
    
            </div>
          </div>

        <div id="big-heading">
            <h3>(forgot to mention)</h3>
            <h2>subscribe to my channel  <i class="ri-arrow-right-up-line"></i></h2>
        </div>

        <div id="about-footer">
            <div id="part1">
                <p>2023@</p>
                <p>10:57 PM EST</p>
            </div>
            <div id="part2">
                <h3>dribble</h3>
                <h3>instagram</h3>
                <h3>linkedin</h3>
                <h3>Twitter</h3>

            </div>
        </div>
    </div> 

  </div>

    <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    
    <script src="script.js"></script>
</body>
</html>


/* The CSS code provided is a stylesheet that defines the styles for a web page. Here is a breakdown of
what each section does: */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;

}


@font-face {
    font-family: regular;
    src: url(./GeneralSans-Regular.otf);
}


@font-face {
    font-family: mediumm;
    src: url(./GeneralSans-Medium.otf);
}



html,body{
    width: 100%;
    height: 100%;
    background-color: #000000;

}


#cursor {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    z-index: 1000;
   transition: all cubic-bezier(0.19, 1 , 0.22 , 1) 1s;
   
}



#main{
    width: 100%;
    position: relative;
}


#home {
    width: 100%;
    min-height: 100vh;
    position: relative;
    background-color: #000000;
    color: white;

}


   #nav{
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px 35px;
    position: fixed;
    z-index: 1000;


  }

  #nav {
    font-family: regular;

  }

  #nav a {
    text-decoration: none;
    color: white;
    font-size: 1.2vw;
    text-transform: capitalize;
    font-weight: 500;
  }

  #nav h3 {
    text-transform: uppercase;
    font-size: 1vw;
  }


  .bounding {
    width: fit-content;
    /* background-color: red; */
    overflow: hidden;
  }

  .bounding .boundingelem{
    transform: translateY(100%);
  }



  #home #heading  {
    margin-top:100px;
  }
  #heading {
    margin-top: 75px;
  }

#heading h1 {
    font-size: 10vw;
    font-family: regular;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;
    opacity: .7;
    margin-left: 40px;

}


#heading #secondh1{
    margin-left: 200px;
}

#heading .blocktext {
    width: fit-content;
    /* background-color: rebeccapurple; */
    display: flex;
    flex-direction: column;
    gap: 130px;
    align-items: end;

}

.blocktext h5{
    text-align: ;
    font-family: regular;
    text-transform: uppercase;
    font-size: 1.1vw;
}


#iconsheading {
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-right: 3vw;
}

.bounding h4 {
    font-family: regular;
    color: white;
    font-size: 1vw;
    margin-bottom: 10px;
    text-transform: uppercase;
    position: relative;
    top: 10px;

}

#footerheading {
    width: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  0px  45px;
    padding-right: 60px;
    position: absolute;
    bottom: 16%;
}

#footerheading h3 {
    font-family: regular;
    text-transform: uppercase;
    font-size: 1vw;

}

#footerheading #icons {
    display: flex;
    align-items: center;
    gap: 10px;
    
}

#icons .icon {
    width: 2vw;
    height: 2vw;
    background-color: white;
    border-radius: 50%;
   color: black;
   display: flex;
   align-items: center;
   justify-content: center;
}

#icons .icon i {
    color: black;
}

#page2{
    width: 100%;
    min-height: 100vh;
    background-color: #000000;
    position: relative;
    padding-top: 200px;
    padding-left: 40px;
    padding-right: 120px;
}

#page2 .elem{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: mediumm;
    padding: 3vw 0vw;
    border-top: 1px solid #888;
    position: relative;
}

#page2 .elem h2 {
    font-size: 7vw;
    text-transform: uppercase;
    opacity: .7;
}


.elem h5{
    font-size: 1.3vw;
    font-family: regular;
    opacity: .7;
}


.elem:nth-last-child(1){
    border-bottom: 1px solid #888;

}

.elem img {
    position: absolute;
    z-index: 999;
    height: 100%;
   opacity: 0;
}
#page3{
    width: 100%;
  height: 130vh;
    position: relative;
    background-color: #000000;
    
}
#page3 #top{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7vw;
    padding-left: 18vw;
    padding-top: 10vw;
}

#page3 img{
     width: 15vw;
     
}



#page3 #text-about h3{
    opacity: .8;
    font-family: regular;
    text-transform: uppercase;
    font-size: 0.9vw;
}

#text-about p {
    font-family: regular;
     font-size: 1.2vw;
     line-height: 1.6;
     margin-top: 10px;
}


#text-about button{
    border: 2px solid #888;
    background-color: transparent;
    color: white;
    border-radius: 50px;
    padding: 0.5vw 1.8vw;
    text-transform: capitalize;
    font-family: regular;
    font-size: 1vw;
    margin-top: 10px;
}


#page3 #big-heading {
    position: relative;
   top: 145px;
   transition: all cubic-bezier(0.19, 1 , 0.22 , 1) 1s;
   left: 35px;
}

#big-heading h3 {
    font-family: regular;
    font-size: 0.8vw;
    opacity: .8;
    text-transform: uppercase;

}

#big-heading h2 {
    font-family: regular;
    font-size: 1.1vw;
    text-transform: uppercase;
    margin-top: 5px;

}


#page3 #about-footer {
    width: 100vw;
    position: relative;
    top: 200px;
    display: flex;
    justify-content: space-between;
    padding: 2vw 2.4vw;
    transition: all cubic-bezier(0.19, 1 , 0.22 , 1) 1s;
}

#page3 #about-footer #part1{
    display: flex;
    align-items: center;
    gap: 30px;
}


#page3 #about-footer #part1  p {
    font-size: 1vw;
    font-family: regular;
    text-transform: uppercase;
    font-weight: bold;

}

#page3 #about-footer #part2 {
    display: flex;
    align-items: center;
    gap: 37px;
}

#page3 #about-footer #part2 h3 
{
    font-family: regular;
    text-transform: uppercase;
    font-size: 1vw;
}


/**
 * The above code is a JavaScript function that uses the Locomotive Scroll library to create smooth
 * scrolling effects and animations on a webpage. It also includes mouse movement interactions, such as
 * skewing elements and rotating images based on the mouse position.
 * @returns The code provided does not have a return statement, so it does not return anything.
 */
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

