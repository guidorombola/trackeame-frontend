var mymap = L.map('mapid').setView([-34.604878, -58.563051], 26);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var latlngs = [
    [-34.605851, -58.563338],
    [-34.605847, -58.563751],
    [-34.605473, -58.563864],
    [-34.605079, -58.563845],
    [-34.604997, -58.563850],
    [-34.604959, -58.563837],
    [-34.604880, -58.563710],
    [-34.604887, -58.563461],
    [-34.604878, -58.563051]
];

var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(mymap);
//mymap.fitBounds(polyline.getBounds());