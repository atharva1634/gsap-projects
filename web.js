var tl = gsap.timeline()
tl.from("#nav h1, #nav-part1 h3, #nav-part2 h3, #nav",{

    delay: 1,
    duration: 1,
    opactity: 0,
    stagger: 0.2,
    y: -100

})


tl.from("section", {
    delay: 0.2,
    duration: 1,
    scale: 0,
    opactity: 0,
    stagger: 0.2,
    scrollTrigger:{
        trigger: "section",
        
        scrollers: "body",
        markers: false,
        end: "top 20%",
        scrub: 2

    }
})
