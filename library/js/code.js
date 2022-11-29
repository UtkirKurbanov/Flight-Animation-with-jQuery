const fligthPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x:1000, y:-20},
        {x:600, y:20},
        {x:800, y:-60},
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".flight",1, {
        bezier: fligthPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: ".animation", 
    duration: 5000,
    triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller)
