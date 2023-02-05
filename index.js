window.initMap = function(){
    const map = new google.maps.Map(document.getElementById("map"),{
        center: { lat: 33.73776, lng: -118.0222632},
        zoom: 1
    });


    // const angry = [
    //     { label: "bacon", name: "Jack in the Box", lat: 33.7269096, lng: -118.0679232 },
    //     { label: "bacon", name: "Corner Bakery", lat: 33.69562, lng: -117.9233953 },
    //     { label: "bacon", name: "Yellow Basket Restaurant Santa Ana", lat: 33.7111182, lng: -117.8953854 },
    //     { label: "bacon", name: "Nate's Korner", lat: 33.6946383, lng: -117.901714 },

    //     { label: "peanuts", name: "Target", lat: 33.6939448, lng: -117.9395769 },
    //     { label: "peanuts", name: "Walmart Supercenter", lat: 33.7461456, lng: -118.0803732 },
    //     { label: "peanuts", name: "Vons", lat: 33.7209513, lng: -117.9672333 },
    //     { label: "peanuts", name: "Peanuts Pub & Deli", lat: 33.7123402, lng: -117.9663691 },
        
    //     { label: "chocolate bar", name: "ROYCE Chocolate", lat: 33.7067248, lng: -118.046865 },
    //     { label: "chocolate bar", name: "Chocolate Bash", lat: 33.6502638, lng: -118.0069238 },

    //     { label: "popcorn", name: "Popcorn - New Orleans Square", lat: 33.8114622, lng: -118.1853711 },
    //     { label: "popcorn", name: "McClain Popcorn Co.", lat: 33.7024568, lng: -118.0441904 },

    //     { label: "cookie", name: "Hudson’s Cookies", lat: 33.6923166, lng: -118.0417442 },
    //     { label: "cookie", name: "Mrs. Fields Cookies", lat: 33.7457174, lng: -118.2728863 },

    //     { label: "doughnut", name: "K & M Donuts", lat: 33.7460911, lng: -118.1182737 },

    //     { label: "rice crackers", name: "Vons", lat: 33.7020771, lng: -118.0708953 },
        
    //     { label: "croissant", name: "Paris Baguette", lat: 33.7434428, lng: -118.0242035 },
        
    //     { label: "candy", name: "candy", lat: 33.7682368, lng: -118.046863 },
    //   ];  

    
    const sad = [
        { label: "cheese", name: "Jack in the Box", lat: 33.8291787, lng: -118.2768989 },

        { label: "cake", name: "Jack in the Box", lat: 33.8107903, lng: -118.4262806 },
        { label: "cheese", name: "Jack in the Box", lat: 33.8291787, lng: -118.2768989 },

    ]

    // control map size according to the label
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();


    // show all markers (angry / int 1)
    sad.forEach(({label,name, lat,lng})=>{
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