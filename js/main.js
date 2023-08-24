$(document).ready(function(){
var lineWidth;
var greyLineHeight = ($('main').outerHeight());
var paragraphHeight;
$('.grey-line').css("height", greyLineHeight+200 + "px" );
paragraphHeight = $(".collecter-white-text").outerHeight();
$('.rectangle-usual').css("height", paragraphHeight + "px" );
if ($( window ).width()<1633 && $( window ).width()>992) {
        lineWidth = $("main .grey-line").width();
        $('.leaf').css("margin-right", lineWidth-80 + "px" );
        $('.stop').css("margin-right", lineWidth-80 + "px" );
        $('.reuse-icon').css("margin-right", lineWidth-80 + "px" );
}
else if ($( window ).width()>1633) {
        $('.leaf').css("margin-right",  "0px" );
        $('.stop').css("margin-right",  "0px" );
        $('.reuse-icon').css("margin-right",  "0px" );
}
$( window ).resize(function() {
        var greyLineHeight = ($('main').outerHeight());
        $('.grey-line').css("height", greyLineHeight+200 + "px" );
        paragraphHeight = $(".collecter-white-text").outerHeight();
        $('.rectangle-usual').css("height", paragraphHeight + "px" );
        if ($( window ).width()<1633 && $( window ).width()>992) {
                lineWidth = $("main .grey-line").width();
                offset =  250 - lineWidth;
                $('.leaf').css("margin-right", lineWidth-80 + "px" );
                $('.stop').css("margin-right", lineWidth-80 + "px" );
                $('.reuse-icon').css("margin-right", lineWidth-80 + "px" );

        }
        else if ($( window ).width()>1633) {
                $('.leaf').css("margin-right",  "0px" );
                $('.stop').css("margin-right",  "0px" );
                $('.reuse-icon').css("margin-right",  "0px" );
        }
});




if ($( window ).width()<992 && $( window ).width()>575 ) {
$(".header-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            top = top - 60;
        $('body,html').animate({scrollTop: top}, 1000);
        $('.header-menu').toggleClass('open-menu');
        $('.menu-burger__header').toggleClass('open-menu');
});
}else if($( window ).width()<575){
$(".header-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            top = top - 50;
        $('body,html').animate({scrollTop: top}, 1000);
        $('.header-menu').toggleClass('open-menu');
        $('.menu-burger__header').toggleClass('open-menu');
});
}else if($( window ).width()>992){
$(".header-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        $('.header-menu').toggleClass('open-menu');
        $('.menu-burger__header').toggleClass('open-menu');
});
}
$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header-menu').toggleClass('open-menu');
});

$('.arr-next').click(function(){
        $('.slider-bottom').toggleClass('reverse');
        console.log("hi");
});
$('.arr-prev').click(function(){
        $('.slider-bottom').toggleClass('reverse');
        console.log("hi");
});

});