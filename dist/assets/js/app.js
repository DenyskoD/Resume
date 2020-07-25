$(function(){

    // slider
    let slider = $("#slickSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });


    // about -> more info after click

    $("#aboutMeButton").click(function(){
        $(".about-me__text").removeClass("hidden");
    });

    // button -> hidden
    $("#aboutMeButton").click(function(){
        $("#aboutMeButton").addClass("hidden");
    });

    
    // skills

    $("#btnSoft").click(function(){
        $(".soft--skills").removeClass("hidden");
        $(".hard--skills").addClass("hidden");
    });

    $("#btnHard").click(function(){
        $(".hard--skills").removeClass("hidden");
        $(".soft--skills").addClass("hidden");
    });

    // portfolio -> more items after click

    $("#portfolioButton").click(function(){
        $(".portfolio__item").removeClass("hidden");
    });

    // button -> hidden
    $("#portfolioButton").click(function(){
        $("#portfolioButton").addClass("hidden");
    });




});