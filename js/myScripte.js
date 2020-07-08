/*global $, document, Typed, window*/
$(document).ready(function () {
    "use strict";
    
    /*loading screen */
    $(".loading-overlay").fadeOut(100, function () {
        $("body").css("overflow-y", "auto");
        $(this).remove();
    });
    
     /* change color of the page */
    
    $(".color-cont ul li").eq(0).css("background-color", "#ffb400").end()
                          .eq(1).css("background-color", "#E53935").end()
                          .eq(2).css("background-color", "#43A047");
    
   
    $(".color-cont ul li").click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    
    /*    nice scrolling */
    $("html").niceScroll({
        cursorcolor: "#9E9E9E",
        cursorwidth: "7px",
        cursoropacitymin: 0.4,
        cursorborder: "0px solid #fff",
        horizrailenabled: false
    });

                    /* about me button  */
    $(".more-info").on("click", function () {
        $(this).blur();
        $("html, body").animate({
            scrollTop : $(".about").offset().top
        }, 1000);
    });
                    /*  scroll to top button  */
    
    $(document).on("scroll", function () {
        if ($(this).scrollTop() > 500) {
            $(".top-btn").fadeIn(500);
        } else {
            $(".top-btn").fadeOut(500);
        }
    });
                    

    $(".top-btn").click(function () {
        $("html, body").animate({
            scrollTop : 0
        }, 1000);
    });
    
                    /*  typed string js  */
    
    var typed = new Typed('#typed', {
        strings: ["Front End Devloper^1000", "UI/UX Designer^1000"],
        smartBackspace: true,
        loop: true,
        typeSpeed: 50,
        backSpeed: 20
    });
                    /*     progress bar animation    */
    
    $(document).on("scroll", function () {
        if ($(this).scrollTop() > $("#skills").offset().top - 200) {
            $(".first_prog").css("width", "90%");
            $(".second_prog").css("width", "85%");
            $(".third_prog").css("width", "80%");
            $(".fourth_prog").css("width", "90%");
            $(".fifth_prog").css("width", "75%");
        }
    });
    
                   
    /*  navigate through using nav items    */
    $(".nav li a").on("click", function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + 5
        }, 1000);
    });
    

    $(window).scroll(function () {
		var scrollDistance = $(window).scrollTop();
		$('section').each(function (i) {
            if ($(this).offset().top - 50 <= scrollDistance) {
                $('.nav li a.active').removeClass('active');
                $('.nav li a').eq(i).addClass('active');
            }
		});
    }).scroll();
    
    /*   slider in blog     */
    $(".blog-posts").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    
});