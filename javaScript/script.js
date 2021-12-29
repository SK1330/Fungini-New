// $(document).ready(function() {
//     $('.first-slider').owlCarousel({
//         // nav: true,
//         loop: true,
//         autoplay: true,
//         // margin: 100,
//         autoplayTimeout: 2500,
//         // navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
//         center: true,
//         responsive: {
//             320: {
//                 items: 1,
//                 // nav: false,
//             },
//             576: {
//                 items: 2,
//                 // nav: true,
//             },
//             1350: {
//                 items: 4,
//                 // nav: true,
//             }

//         }
//     });
// });





$(document).ready(function() {
    $('.slider').owlCarousel({
        loop: true,
        margin: 50,
        // nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

// $(document).ready(function() {
//     $('.slider').owlCarousel({
//         center: true,
//         items: 2,
//         loop: true,
//         margin: 50,
//         responsive: {
//             600: {
//                 items: 2
//             }
//         }
//     });
// });

// $(document).ready(function() {
//     $('.feedback-slides').owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: true,
//         autoplay: true,
//         autoplayTimeout: 2000

//     });
// });


// $(document).ready(function($) {
//     $('.counter').counterUp({
//         delay: 10000,
//         time: 10000
//     });
// });

$(document).scroll(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 1000
    });
});

$(document).ready(function() {
    $('.upcomingEvents').owlCarousel({
        loop: true,
        margin: 10,
        // nav: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 2
            }
        }
    });
});


$(document).ready(function() {
    $('.upcomingEvents-2').owlCarousel({
        loop: true,
        margin: 10,
        // nav: true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 2
            }
        }
    });
});


// $(document).ready(function() {
//     $('.feedback-slides').owlCarousel({
//         loop: true,
//         margin: 50,
//         // nav: true,
//         autoplay: true,
//         autoplayTimeout: 5000,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 1
//             },
//             1000: {
//                 items: 3
//             }
//         }
//     });
// });



$('input').on('change', function() {
    $('body').toggleClass('blue');
});


$(document).ready(function() {
    $('.carousel').carousel();
});

// $(document).ready(function() {
//     $('.first-slider').slick({
//         setting - name: setting - value
//     });
// });
$(document).ready(function() {
    $('.first-slider').slick({
        centerMode: true,
        centerPadding: '100px',
        focusOnSelect: true,
        slidesToShow: 3,

        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});