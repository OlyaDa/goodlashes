
//input mask

$('.phoneidcl').inputmask('+380(99) 999-99-99',{ "oncomplete": function(){
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

//modal window

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

//mobile menu (header)

$(function(){
    $('.toggle-menu').on('click',function(){
        $('.main-nav').toggleClass('open');
        $('.header').toggleClass('bg');
        $( ".toggle-menu" ).toggleClass( "menu-on");
    });
});

$(document).ready(function() {
    $(document).ready(function() {
        $('.nav-link-new').click(function () {
            $('.main-nav').removeClass('open');
            $('.toggle-menu').removeClass('menu-on');
        });

    });
});


//slider for "cosmetics"

$('.cosmetics-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow:'<button class="slick-arrow slick-prev"> <span class="icon-arrow-left"></span> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <span class="icon-arrow-right"></span> </button>',
    dots: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: true,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
    ]
});

//slider for "results"

$('.results-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow:'<button class="slick-arrow slick-prev"> <span class="icon-arrow-left"></span> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <span class="icon-arrow-right"></span> </button>',
    responsive: [
        {
            breakpoint: 577,
            settings: {
                arrows: false,
            }
        },
    ]
});

//slider for "reviews"

$('.reviews-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    // prevArrow:'<button class="slick-arrow slick-prev"> <span class="icon-arrow-left"></span> </button>',
    // nextArrow:'<button class="slick-arrow slick-next"> <span class="icon-arrow-right"></span> </button>',
    dots: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: true,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
    ]
});

//scroll

$('.nav-link-new').mPageScroll2id();

//video popup

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

//gallery
$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});
