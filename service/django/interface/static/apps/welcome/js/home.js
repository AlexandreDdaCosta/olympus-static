// background images

$(document).ready(function(){
    $(window).scroll(function(){
    var pxToTop = $(window).scrollTop();
    var breakOffset = $(window).height() * .25;

    var blogOffset = $('#welcome_header_slogan').offset().top;
    var photographyOffset = $('#blog_summary').offset().top - breakOffset;
    var appsOffset = $('#photography_summary').offset().top - breakOffset;
    var endOffset = $('#apps_summary').offset().top - breakOffset
    if (pxToTop < blogOffset){
        jQuery('body').removeClass('blog_background');
        jQuery('body').removeClass('photography_background');
        jQuery('body').removeClass('apps_background');
    }else if (pxToTop >= blogOffset && pxToTop < photographyOffset){
        jQuery('body').addClass('blog_background');
        jQuery('body').removeClass('photography_background');
        jQuery('body').removeClass('apps_background');
    }else if (pxToTop >= photographyOffset && pxToTop < appsOffset){
        jQuery('body').addClass('photography_background');
        jQuery('body').removeClass('blog_background');
        jQuery('body').removeClass('apps_background');
    }else if (pxToTop >= appsOffset && pxToTop < endOffset){
        jQuery('body').addClass('apps_background');
        jQuery('body').removeClass('photography_background');
        jQuery('body').removeClass('blog_background');
    }else{
        jQuery('body').removeClass('apps_background');
        jQuery('body').removeClass('photography_background');
        jQuery('body').removeClass('blog_background');
    }
});
});

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
.addIndicators({name:'lead_image_fade',colorStart:'purple',colorTrigger:'yellow' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '#intro_image',
 duration: "30%",
 offset: 350 
})
.setTween("#lead_image_fade", 1.0, {opacity:0, ease: Power1.easeOut})
//.addIndicators({name:'lead_image_fade',colorStart:'yellow',colorTrigger:'green' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '#intro_image',
 duration: "50%",
 offset: 600 
})
.setTween("#intro_image", 1.0, {opacity: 0})
//.addIndicators({name:'intro_image',colorStart:'green',colorTrigger:'red' })
.addTo(controller);

new ScrollMagic.Scene({
 duration: 200,
 offset: 50 
})
.setTween("#intro_text", 1.0, {opacity:0, ease: Power0.easeNone})
//.addIndicators({name:'intro_text',colorStart:'red',colorTrigger:'blue' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '.welcome_header_intro',
 duration: 400,
 offset: -250 
})
.setTween(".welcome_header_intro", .5, {opacity:1, ease: Power2.easeOut})
//.addIndicators({name:'welcome_header_intro opacity',colorStart:'blue',colorTrigger:'orange' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '.welcome_header_name',
 duration: "50%",
 offset: -150 
})
.setTween(".welcome_header_name", .5, {opacity:1, ease: Power2.easeOut})
//.addIndicators({name:'welcome_header_name opacity',colorStart:'orange',colorTrigger:'purple' })
.addTo(controller);

var headerTween = TweenMax.staggerFromTo('.welcome_header_slogan', 1, { y: 60, x: -60, opacity: 0 }, { y: 0, x: 0, opacity: 1 });
var headerScene = new ScrollMagic.Scene({
  triggerElement: '.welcome_header_slogan',
  duration: "30%",
  offset: -150
})
.setTween(headerTween)
//.addIndicators({name:'welcome_header_slogan',colorStart:'purple',colorTrigger:'yellow' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '.welcome_header_slogan',
 duration: "20%",
 offset: -50
})
.setTween("#welcome_header_image", 1.0, {opacity:1, ease: Power1.easeOut})
//.addIndicators({name:'welcome_header_image_fadein',colorStart:'yellow',colorTrigger:'green' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '#blog',
 duration: "60%",
 offset: -400 
})
.setTween("#welcome_overlay", .5, {opacity:1, ease: Power1.easeIn})
//.addIndicators({name:'welcome_overlay_fadeIn',colorStart:'green',colorTrigger:'red' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '#blog',
 duration: "50%",
 offset: -100 
})
.setTween("#blog_overlay", .5, {opacity:0, ease: Power1.easeOut})
//.addIndicators({name:'blog_overlay_fadeIn',colorStart:'red',colorTrigger:'blue' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '#blog_summary',
 duration: "50%",
 offset: -100 
})
.setTween("#blog_overlay", .5, {opacity:1, ease: Power1.easeOut})
//.addIndicators({name:'blog_overlay_fadeOut',colorStart:'blue',colorTrigger:'orange' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '#photography',
 duration: "50%",
 offset: -100 
})
.setTween("#photography_overlay", .5, {opacity:0, ease: Power1.easeOut})
//.addIndicators({name:'photography_overlay_fadeIn',colorStart:'orange',colorTrigger:'purple' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '#photography_summary',
 duration: "50%",
 offset: -100 
})
.setTween("#photography_overlay", .5, {opacity:1, ease: Power1.easeOut})
//.addIndicators({name:'photography_overlay_fadeOut',colorStart:'purple',colorTrigger:'yellow' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '#apps',
 duration: "50%",
 offset: -100 
})
.setTween("#apps_overlay", .5, {opacity:0, ease: Power1.easeOut})
//.addIndicators({name:'apps_overlay_fadeIn',colorStart:'yellow',colorTrigger:'green' })
.addTo(controller);

new ScrollMagic.Scene({
 triggerElement: '#apps_summary',
 duration: "50%",
 offset: -100 
})
.setTween("#apps_overlay", .5, {opacity:1, ease: Power1.easeOut})
//.addIndicators({name:'apps_overlay_fadeOut',colorStart:'green',colorTrigger:'red' })
.addTo(controller);
