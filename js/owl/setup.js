$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})