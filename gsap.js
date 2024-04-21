var tl = gsap.timeline()


tl.from("nav #nav, nav h3, nav button",{
    y: -100,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.1
})

tl.from("#ptop h1, #ptop button",{
    x: 100,
    duration:0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.1

})
tl.from("#main .ele", {
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    scale: 0,
    stagger: 0.1
})   

tl.from("#ptop h5", {
    y: -20,
    yoyo: true,
    repeat: -1,
    delay: 0.2,
    duration:1,
    opacity: 0
})

