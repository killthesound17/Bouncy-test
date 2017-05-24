//SMOOTH

$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });



//ISOTOPE

var $grid = $('.grid').isotope({
    masonry: {
        itemSelector: '.grid__grid-item',
        percentPosition: true,
        gutter: 10,
        horizontalOrder: true
    }
});
$('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});



// slick


$('.slider').slick({
    arrows: false,
    dots: true
});

$('.test-slider').slick({
    arrows: false,
    dots: true
});




//GOOGLE maps

function initMap() {
    var bouncyPos = {
        lat: 40.718843,
        lng: -73.680038
    };

    var map = new google.maps.Map(document.getElementById('map-main'), {
        zoom: 17,
        center: bouncyPos,
        mapTypeId: 'roadmap'
    });

    var image = '../bouncy/img/mint-icon1.png';
    var bouncyMarker = new google.maps.Marker({
        position: bouncyPos,
        animation: google.maps.Animation.DROP,
        title: "Bouncy Here!",
        map: map,
        icon: image,
        styles: [{
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#11be9b"
            }]
        }]
    });
    bouncyMarker.setMap(map);

    //
    // var marker = new google.maps.Marker({
    //     position: pos,
    //     map: map
    // });
}
google.maps.event.addDomListener(window, 'load', initMap);

//back to tops

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});



//buttons

$(function() {
    $(".portfolio-buttons button").click(function() {
        $(".portfolio-buttons button").removeClass("portfolio-buttons__item--active");
        $(this).toggleClass("portfolio-buttons__item--active");
    })
});
