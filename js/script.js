$('#slider1').owlCarousel({
    loop: true,
    rewind:true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
})

new WOW().init();

var owl = $('#slider1');
owl.owlCarousel();
// Listen to owl events:
owl.on('changed.owl.carousel', function (event) {
    new WOW().init();
})


$('#slider2').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    // nav:true,
    autoplay:true,
    autoplayTimeout:3000,
})

// $("#slider2").owlCarousel({
//     autoPlay: true, //Set AutoPlay to 3 seconds
//     items: 4,
//     navigation: false,
//     pagination: true,
//     navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
// }); 


$('#slider3').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    // nav:true,
    autoplay:true,
    autoplayTimeout:3000
})
