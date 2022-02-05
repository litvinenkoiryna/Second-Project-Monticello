"use strict";

function initMap() {
    // The location of Uluru
    const uluru = { lat: 48.720762334393584, lng: 37.555464244293496 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

let anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
            })
      })
}



    $(document).ready(function(){
    $('.news__carusel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true,
        centerPadding: '30px',
        responsive: [
        {
            breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 2,

        }
        },
        {
            breakpoint: 425,
                settings: {
                    arrows: false,
                    slidesToShow: 1
        }
        }
    ]
    });
});


