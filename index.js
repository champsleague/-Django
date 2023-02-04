window.initMap = function(){
    const map = new google.maps.Map(document.getElementById("map"),{
        center: { lat: 37.1926035, lng: -123.8100657},
        zoom: 5
    });

    new google.maps.Marker({
        position: {lat:33.696049, lng:-117.8588907},
        label: "PeopleSpace",
        map: map
    })
};