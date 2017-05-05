var background_mirror_image = $("#background_mirror_image");
TweenMax.to(background_mirror_image, 6, {opacity:0});
// animation

var intro_text = $("#intro_text");
TweenMax.to(intro_text, 4, {css:{color: "rgb(255, 255, 255)", visibility: "visible"}});
var intro_text_img = $("#intro_text img");
TweenMax.fromTo(intro_text_img, 8, {css: {opacity: 0, visibility: "visible", transform: "scale(0.4)"}}, {css:{opacity: 1, visibility: "visible", transform: "scale(1)"}});
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
 triggerElement: '#lead_image_fade',
 duration: 300,
 offset: 350 
})
.setTween("#lead_image_fade", 1.0, {opacity:0})
.addIndicators({name:'lead_image_fade',colorStart:'yellow',colorTrigger:'green' })
.addTo(controller);
new ScrollMagic.Scene({
 duration: 200,
 offset: 50 
})
.setTween("#intro_text", 1.0, {opacity:0})
.addIndicators({name:'intro_text',colorStart:'blue',colorTrigger:'orange' })
.addTo(controller);
