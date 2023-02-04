window.initMap = function(){
    const map = new google.maps.Map(document.getElementById("map"),{
        center: { lat: 37.1926035, lng: -123.8100657},
        zoom: 10
    });


    const burgers = [
        { label: "I", name: "In-N-Out", lat: 33.7296761, lng: -117.9830301 },
        { label: "B", name: "Burger King", lat: 33.7461456, lng: -118.0803732 },
        { label: "M", name: "McDonald's", lat: 33.7054491, lng: -117.9489364 },
        { label: "H", name: "Habit", lat: 33.705422, lng: -117.949221 },
        { label: "C", name: "Chick-fil-A", lat: 33.7053824, lng: -117.9495645 },
        { label: "F", name: "Five Guys", lat: 33.691781, lng: -118.5167313 },
      ];  

    burgers.forEach(({label,lat,lng})=>{
        new google.maps.Marker({
            position: {lat, lng},
            label,
            map
        })
    })
};