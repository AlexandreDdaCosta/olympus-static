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
// .addIndicators({name:'lead_image_fade',colorStart:'yellow',colorTrigger:'green' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '#intro_image',
 duration: "50%",
 offset: 350 
})
.setTween("#lead_image_fade", 1.0, {opacity:0, ease: Power1.easeOut})
// .addIndicators({name:'lead_image_fade',colorStart:'yellow',colorTrigger:'green' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '#intro_image',
 duration: "50%",
 offset: 600 
})
.setTween("#intro_image", 1.0, {opacity: 0})
// .addIndicators({name:'intro_image',colorStart:'yellow',colorTrigger:'green' })
.addTo(controller);

new ScrollMagic.Scene({
 duration: 200,
 offset: 50 
})
.setTween("#intro_text", 1.0, {opacity:0, ease: Power0.easeNone})
// .addIndicators({name:'intro_text',colorStart:'blue',colorTrigger:'orange' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '.welcome_header_intro',
 duration: 400,
 offset: -250 
})
.setTween(".welcome_header_intro", .5, {opacity:1, ease: Power2.easeOut})
.addIndicators({name:'welcome_header_intro opacity',colorStart:'blue',colorTrigger:'orange' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '.welcome_header_name',
 duration: "50%",
 offset: -150 
})
.setTween(".welcome_header_name", .5, {opacity:1, ease: Power2.easeOut})
.addIndicators({name:'welcome_header_name opacity',colorStart:'orange',colorTrigger:'red' })
.addTo(controller);

var headerTween = TweenMax.staggerFromTo('.welcome_header_slogan', 1, { y: 50, x: -50, opacity: 0 }, { y: 0, x: 0, opacity: 1 });
var headerScene = new ScrollMagic.Scene({
  triggerElement: '.welcome_header_slogan',
  duration: 200,
  offset: -150
})
.setTween(headerTween)
.addIndicators({name:'welcome_header_slogan',colorStart:'red',colorTrigger:'yellow' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '.welcome_header_intro',
 duration: "50%",
 offset: -100
})
.setTween("#welcome_header_image", 1.0, {opacity:1, ease: Power1.easeOut})
.addIndicators({name:'welcome_header_image_fadein',colorStart:'yellow',colorTrigger:'green' })
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.welcome_header_slogan',
  duration: "25%",
  offset: -150
})
.setTween("#welcome_header_image_overlay", 1.0, {opacity:0, ease: Power1.easeOut})
.addIndicators({name:'welcome_header_image_overlay_fadeout',colorStart:'green',colorTrigger:'purple' })
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.welcome_header_slogan',
  duration: "75%",
  offset: 300 
})
.setTween("#welcome_header_image_overlay", 1.0, {opacity:1, ease: Power1.easeOut})
.addIndicators({name:'welcome_header_image_overlay_fadeout',colorStart:'green',colorTrigger:'purple' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '.welcome_header_slogan',
 duration: "50%",
 offset: 500 
})
.setTween("#welcome", .5, {opacity:0, ease: Power2.easeOut})
.addIndicators({name:'welcome opacity',colorStart:'purple',colorTrigger:'blue' })
.addTo(controller);

