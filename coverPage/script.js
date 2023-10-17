let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

 timeline
  .to(".front", 10, { y: -750 }) 
  //for 10 sec, y pos of ".item" will change 300 to left ('item', duration,{action})
  .to(".core", 10, { y: -450 }, "-=10")
  .to(".mid", 10, { y: -300 }, "-=10")
  .to(".bg2", 10, { y: -220 }, "-=10")
  // the -=10 makes it wait 10 fewer seconds to start from the end of the previous one. 
  .fromTo(".bg1", { y: -10 }, { y: 0, duration: 10 }, "-=10") 
  // fromTo lets you set {initialValue}, {finalValue}, time correction
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 6 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 }, "-=4")
  .fromTo("footer", { opacity: 0 }, { opacity: 1, duration: 3 }, "-=4")

  let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "400%",
    triggerHook: 0,
  })
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);