window.initMap = function(){
    const map = new google.maps.Map(document.getElementById("map"),{
        center: { lat: 33.73776, lng: -118.0222632},
        zoom: 10
    });


    const angry = [
        { label: "bacon", name: "Jack in the Box", lat: 33.7269096, lng: -118.0679232 },
        { label: "bacon", name: "Corner Bakery", lat: 33.69562, lng: -117.9233953 },
        { label: "bacon", name: "Paragon", lat: 33.6939472, lng: -117.9395769 },
        { label: "bacon", name: "Yellow Basket Restaurant Santa Ana", lat: 33.7111182, lng: -117.8953854 },
        { label: "bacon", name: "Nate's Korner", lat: 33.6946383, lng: -117.901714 },

        { label: "peanuts", name: "Target", lat: 33.6939448, lng: -117.9395769 },
        { label: "peanuts", name: "Walmart Supercenter", lat: 33.7461456, lng: -118.0803732 },
        { label: "peanuts", name: "peanuts", lat: 33.7461456, lng: -118.0803732 },
        { label: "peanuts", name: "peanuts", lat: 33.7461456, lng: -118.0803732 },
        // { label: "chocolate bar", name: "chocolate bar", lat: 33.7054491, lng: -117.9489364 },
        // { label: "popcorn", name: "popcorn", lat: 33.705422, lng: -117.949221 },
        // { label: "cookie", name: "cookie", lat: 33.7053824, lng: -117.9495645 },
        // { label: "doughnut", name: "doughnut", lat: 33.7567961, lng: -117.9408495 },
        // { label: "rice crackers", name: "rice crackers", lat: 33.7567961, lng: -117.9408495 },
        // { label: "croissant", name: "croissant", lat: 33.7567961, lng: -117.9408495 },
        // { label: "candy", name: "candy", lat: 33.7567961, lng: -117.9408495 },
      ];  

    // control map size according to the label
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();


    // show all markers (angry)
    angry.forEach(({label,name, lat,lng})=>{
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