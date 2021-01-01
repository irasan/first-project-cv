let map;

function initMap() {
    
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(46, -33),
        zoom: 3,
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
        lat: 40.785091,
        lng: -73.968285
    }, {
        lat: 41.084045,
        lng: -73.874256
    }, {
        lat: 40.754932,
        lng: -73.984016
    }];

    for (let i = 0; i < labels.length; i++) {
        const marker = new google.maps.Marker({
            position: locations[i],
            map: map,
        });
    }

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
