// animation

var background_mirror_image = $("#background_mirror_image");
TweenMax.to(background_mirror_image, 6, {opacity:0});

var controller = new ScrollMagic.Controller();

var intro_text = $("#intro_text");
TweenMax.to(intro_text, 4, {css:{color: "rgb(255, 255, 255)", visibility: "visible"}});
var intro_text_img = $("#intro_text img");
TweenMax.fromTo(intro_text_img, 8, {css: {opacity: 0, visibility: "visible", transform: "scale(0.4)"}}, {css:{opacity: 1, visibility: "visible", transform: "scale(1)"}});
new ScrollMagic.Scene({
 triggerElement: '#lead_image_fade',
 duration: "50%",
 offset: 350 
})
.setTween("#lead_image_fade", 1.0, {opacity:0, ease: Power1.easeOut})
.addIndicators({name:'lead_image_fade',colorStart:'yellow',colorTrigger:'green' })
.addTo(controller);
new ScrollMagic.Scene({
 triggerElement: '#intro_image',
 duration: "50%",
 offset: 600 
})
.setTween("#intro_image", 1.0, {opacity: 0})
.addIndicators({name:'intro_image',colorStart:'yellow',colorTrigger:'green' })
.addTo(controller);
new ScrollMagic.Scene({
 duration: 200,
 offset: 50 
})
.setTween("#intro_text", 1.0, {opacity:0, ease: Power0.easeNone})
.addIndicators({name:'intro_text',colorStart:'blue',colorTrigger:'orange' })
.addTo(controller);
new ScrollMagic.Scene({
 triggerElement: '#welcome_header',
 duration: 400,
 offset: -150 
})
.setTween("#welcome_header", .5, {opacity:1, ease: Power2.easeOut})
.addIndicators({name:'welcome_header opacity',colorStart:'blue',colorTrigger:'orange' })
.addTo(controller);
new ScrollMagic.Scene({
 triggerElement: "#welcome_header",
 duration: 1000,
 offset: 250 
})
.setPin("#welcome_header")
.addIndicators({name:'welcome_header pin',colorStart:'purple',colorTrigger:'yellow' })
.addTo(controller);
