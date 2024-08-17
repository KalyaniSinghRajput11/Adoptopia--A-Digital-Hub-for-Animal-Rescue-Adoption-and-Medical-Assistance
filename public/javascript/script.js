swiper = function () {
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
}
swiper();

var cursor = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
   gsap.to("#cursor",{
     x: dets.x,
     y: dets.y
   })
})



var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page1",
        scroller: "body",
        // start: "top 0%",
        // end: "top -60%",
        // pin: true,
  
    }})
tl1.from("#nav",{
  // x:100,
  y : -120,
  scale : 3,
  duration: 1 ,
  delay:0.3,
  stagger: 0.4,
  opacity : 0,
  scrub:2,
})

tl1.from("#mian1 ",{
  x: -500,
  stagger:0.5,
    duration:0.5,
    delay:0.1,
    opacity: 0
})
tl1.from("#mian3 ",{
  x: 200,
  stagger:0.5,
    duration:0.5,
    delay:0.1,
    opacity: 0
})
tl1.from("#mian2 ",{
  // x: -500,
  scale : "0",
  stagger:0.5,
    duration:0.5,
    delay:0.2,
    opacity: 1
})
tl1.from(" #bottom ",{
  x: -500,
    duration:0.5,
    delay:0.5,
    opacity: 0
})


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        // start: "top 0%",
        // end: "top -40%",
        pin: true,
   }})
tl2.from("#left2 , #right2",{

  x: -500,
  stagger:0.5,
    duration:0.5,
    delay:.2,
    opacity: 0
})

var tl3= gsap.timeline({
  scrollTrigger:{
      trigger: "#page3",
      scroller: "body",
      start: "top 0%",
      end: "top -60%",
      pin: true,
 }})
tl3.from("#left3 , #right3",{

x: -500,
stagger:0.5,
  duration:0.5,
  delay:.5,
  opacity: 0
})

