L.mapbox.accessToken = 'pk.eyJ1IjoiYWtzaGF5MDQiLCJhIjoiMG5sWGx0WSJ9.YbvjfBs2-EvdTSftGgzfbA';
var map = L.mapbox.map('map').setView([18.888422, 0.450318	], 2);;
L.mapbox.styleLayer('mapbox://styles/akshay04/cimub8uhg008x9wnj11f2e5yr',{
	continuousWorld: false,
	noWrap: true
}).addTo(map);