window.initMap = function(){
    new google.maps.Map(document.getElementById("map"),{
        center: { lat: 37.1926035, lng: -123.8100657},
        zoom: 10
    });
};