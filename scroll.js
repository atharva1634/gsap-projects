gsap.from("#main .panel",{
    
    duration: 1,
    scale: 0,
    delay: 1,
    rotate: 360,
    
})
gsap.from("#main2 .panel",{
    
    duration: 1,
    scale: 0,
    delay: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: "#main2 .panel",
        markers: false,
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 5
    }
})