$(document).ready(function(){
    var owl =  $(".owl-carousel").owlCarousel({
        loop:true,
        items: 2,
        responsiveClass:true,
        autoHeight: true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:2
            }

        }
    });




    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    owl.on('changed.owl.carousel', function(event) {
        console.log(event)
    })


});


  