//smooth scroll

$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

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



    //social-media
    $('.social-media__container').hover(
           function(){
             $(this).addClass('fa-2x').css('transition', 'all .1s ease-in')
           },
           function() {
             $(this).removeClass('fa-2x')
           }
    );

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
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000
});




//GOOGLE maps

function initMap() {
    var bouncyPos = {
        lat: 40.718843,
        lng: -73.680038
    };

    var map = new google.maps.Map(document.getElementById('map-main'), {
        scrollwheel: false,
        zoom: 17,
        center: bouncyPos,
        mapTypeId: 'roadmap',
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'landscape.man_made',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.local',
              elementType: 'geometry',
              stylers: [{color: '#11be9b'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
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
}
google.maps.event.addDomListener(window, 'load', initMap);



//
// this.$sm = $('.social-media__container');
// this.$sm.hover(
//       function(){
//         $('.social-media__icobgr').addClass('fa-hover')},
//       function() {
//         $('.social-media__icobgr').removeClass('fa-hover')}


    // },
    // function(){
    //     $('.social-media__icobgr').css('background-color','#FFF');
    // }
