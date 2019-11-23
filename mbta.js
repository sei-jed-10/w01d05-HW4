var subway = 
[
{
  line: "Red",
  stations: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
},
{
  line: "Green",
  stations: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
},
{
  line: "Orange",
  stations: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"],
}
];

var startLine;
var startStation;
var endLine ;
var endStation;
var intersection1;
var intersection2;
var stops;

function stopsBetweenStations(startLine, startStation, endLine, endStation) {
  
  for (var i = 0; i < subway.length; i++) {
    
    if (startLine === subway[i].line) {
      startLine = subway[i].line;
      startStation = subway[i].stations.indexOf(startStation);
      intersection1 = subway[i].stations.indexOf("Park Street");
    }

    if (endLine === subway[i].line) {
      endLine = subway[i].line;
      endStation = subway[i].stations.indexOf(endStation);
      intersection2 = subway[i].stations.indexOf("Park Street");
    }
  }
  if (startLine === endLine) {
    stops = Math.abs(startStation - endStation);
    return stops + " stops";
  }
  else {
    stops = Math.abs(Math.abs(startStation - intersection1) + Math.abs(endStation - intersection2));
    return stops + " stops";
  }
}

console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'));
console.log(stopsBetweenStations('Red', 'Alewife', 'Red','South Station'));
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'));