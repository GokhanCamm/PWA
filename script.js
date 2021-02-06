var mymap = L.map('mapid').setView([52.230533, 21.006266], 10);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri'
}).addTo(mymap);