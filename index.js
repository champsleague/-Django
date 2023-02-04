window.initMap = function(){
    const map = new google.maps.Map(document.getElementById("map"),{
        center: { lat: 33.73776, lng: -118.0222632},
        zoom: 12
    });


    const burgers = [
        { label: "I", name: "In-N-Out", lat: 33.7296761, lng: -117.9830301 },
        { label: "B", name: "Burger King", lat: 33.7461456, lng: -118.0803732 },
        { label: "M", name: "McDonald's", lat: 33.7054491, lng: -117.9489364 },
        { label: "H", name: "Habit", lat: 33.705422, lng: -117.949221 },
        { label: "C", name: "Chick-fil-A", lat: 33.7053824, lng: -117.9495645 },
        { label: "F", name: "Five Guys", lat: 33.7567961, lng: -117.9408495 },
      ];  

    // control map size according to the label
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();


    // show all markers (burgers)
    burgers.forEach(({label,name, lat,lng})=>{
       const marker =  new google.maps.Marker({
            position: {lat, lng},
            label,
            map
        })
        bounds.extend(marker.position);

        // changes position when clicked
        marker.addListener("click",()=>{
            map.panTo(marker.position)

            // show info when clicked
            infoWindow.setContent(name);
            infoWindow.open({
                anchor: marker,
                map
            })
        })
    })

    map.fitBounds(bounds)
};