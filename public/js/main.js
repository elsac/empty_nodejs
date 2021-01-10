
/****CREATE A MAP WITH LEAFLET***/


var map = L.map('map',{
    center: [49.194551814950195, 2.4754237557919376],
    zoom: 19,
    preferCanvas: true
});

L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

//L.mapbox.accessToken,mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';


//var map = L.mapboxgl.map('map', 'mapbox.satellite-streets').setView([49.194551814950195, 2.4754237557919376], 19);
/*map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [2.4754,49.1945],
    zoom: 19,
    bearing: 0
});*/

setTimeout(function() {
    console.log("ok");
    leafletImage(map, doImage);
}, 2000);

function doImage(err, canvas) {
    console.log(canvas);
    var img = document.createElement('img');
    var dimensions = map.getSize();
    img.width = dimensions.x;
    img.height = dimensions.y;
    img.src = canvas.toDataURL();
    console.log(img);
    const downloadLink = document.createElement("a");
    downloadLink.href = img.src;
    downloadLink.download = "test";
    downloadLink.click();
}


