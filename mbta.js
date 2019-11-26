const red = {
  stations: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']}
const green = {
  stations: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']}
const orange = {
stations: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']};

function stopsBetweenStations (startLine, startStation, endLine, endStation){		

if (startLine != (red || green || orange)){
      return 'wrong entry.';}

let starting = '';
let ending = '';
let stops = '';

if (startLine == endLine && startStation == endStation) {
  stops = 0;
  return stops;
} 

if (startLine == endLine && startStation != endStation) {
  stops = (endLine.stations.indexOf(endStation) - startLine.stations.indexOf(startStation)) - 1;
  if (stops < 0) { return 'you have ' + ((stops * -1) - 2) + ' stops to your destination.';}
  else {return 'you have ' + stops + ' stops to your destination.';}
}

  for (let i = 0; i < startLine.stations.length; i ++) {
      let starting = '';
if (startLine.stations[i].indexOf('Park Street') == true) {
  starting = i;
  }
for (let n = 0; n < endLine.stations.length; n ++) { 
    let ending = '';
    if (endLine.stations[n].indexOf('Park Street') == true) {
      ending = n;
    }
    stops = (starting + ending);
    return 'you have ' + stops + ' stops to your destination.';
}
  }
}

  // console.log(stopsBetweenStations(red, 'Alewife', red, 'Alewife')) 
  // => 0 stops // its working ..
  // console.log(stopsBetweenStations(red, 'Alewife', red, 'South Station'))
  // => 6 stops // its working ..

  // console.log(stopsBetweenStations(red, 'South Station', green, 'Kenmore'))
  // => 5 stops // -------------------------------------------------------------- not working ..
  
  // console.log(stopsBetweenStations('not', 'not', 'not', 'not'))
  // => wrong entry. // its working ..