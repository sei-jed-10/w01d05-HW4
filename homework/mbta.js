const lineAndStations = {
  Red : ["South Station", "Park Street", "Kendall", "Central", "Harvard","Porter", "Davis", "Alewife"],
  Green : ["Government Center","Park Street","Boylston","Arlington", "Copley","Hynes","Kenmore"],
  Orange : ["North Station", "Haymarket", "Park Street","State","Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
};

var result = 0;

function stopsBetweenStations(startLine, startStation, endLine, endStation){
  var startL = Object.keys(lineAndStations).indexOf(startLine);
  var endL = Object.keys(lineAndStations).indexOf(endLine);

  var startS = lineAndStations[startLine].indexOf(startStation);
  var endS = lineAndStations[endLine].indexOf(endStation);

  var perkStar = lineAndStations[startLine].indexOf("Park Street");
  var parkEnd = lineAndStations[endLine].indexOf("Park Street");

  if (startLine === endLine){
    for (var i = startS+1; i <= endS; i++ ){
      result++;
    }
    
  } else if (startLine !== endLine){
    for (var j = startS+1; j <= perkStar; j++){ 
      //console.log(lineAndStations[startLine][j]);
      result++;
    }
    for (var m = parkEnd+1; m <= endS; m++){
      //console.log(lineAndStations[startLine][m]);
      result++;
    } 
  }
return result;
}
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')+ " Stop");