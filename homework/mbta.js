const lineAndStations = {
  Red : ["South Station", "Park Street", "Kendall", "Central", "Harvard","Porter", "Davis", "Alewife"],
  Green : ["Government Center","Park Street","Boylston","Arlington", "Copley","Hynes","Kenmore"],
  Orange : ["North Station", "Haymarket", "Park Street","State","Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
};
var concatArray = lineAndStations.Red.concat(lineAndStations.Green, lineAndStations.Orange); 

var arr = []
var result = 0;

console.log(concatArray);

//console.log(lineAndStations.Red[0].one)
function stopsBetweenStations(startLine, startStation, endLine, endStation){

  var startL = Object.keys(lineAndStations).indexOf(startLine);
  var endL = Object.keys(lineAndStations).indexOf(endLine);

  var startS = lineAndStations[startLine].indexOf(startStation);
  var endS = lineAndStations[endLine].indexOf(endStation);

  console.log(startL,startS,endL,endS);

  for (var j = startL; j <= endL; j++){
    //result++;

    for (var i = startS+1; i <=  endS/*proplem*/ ; i++){
      console.log(lineAndStations[startLine][i]);
      result++;

    }
  }

  return result;
}

console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Copley') + " stops");

