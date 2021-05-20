//Created by Arafat Hossain
//Javascript codes start here

$(document).ready(function () {
    'use strict';

    // setTimeout(function () {
    //     $('.loader_bg').fadeToggle();
    // }, 1500);

    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 200) {
            $(".navbar").css({ "background-color": "#ffffff", "transition": "all 0.8s ease-in-out", "box-shadow": "0px 3px 4.6px 0.3px rgba(0, 0, 0, 0.25)" });
            $(".navbar-collapse").css("background-color", "transparent");
            $(".nav-link").css("color", "teal")
            $(".navbar-brand").css("color", "teal")
        } else {
            $(".navbar").css({ "background-color": "transparent", "box-shadow": "none" });
            $(".nav-link").css("color", "white")
            $(".navbar-brand").css("color", "white")
        }
    });

    var element = $(".text-affect");

    $(function () {
        element.typed({
            strings: ["Designer", "Developer", "Freelancer"],
            loop: true,
            typeSpeed: 90
        });
    });
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 5000);
    });

    $('.view').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }
    });

    $("#review-slider").owlCarousel({
        items: 1,

        itemsDesktop: [1000, 1],

        itemsDesktopSmall: [979, 1],

        itemsTablet: [768, 1],

        pagination: true,

        navigation: false,

        slideSpeed: 1000,

        singleItem: false,

        autoplay: true,

        loop: true
    });

});