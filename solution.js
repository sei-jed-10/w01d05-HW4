function stopsBetweenStations(StartLine, StartStation, EndLine, EndStation){
   
var mbta = [
  { 
    line:"Red",
   Station:["South Station",
  "Park Street",
  "Kendall", 
  "Central",
  "Harvard",
  "Porter",
   "Davis",
  "Alewife"]
  }, 
  {
    line:"Green",
   Station: ["Government Center",
  "Park Street",
  "Boylston",
  "Arlington",
  "Copley",
  "Hynes",
  "Kenmore"]
  },
  {
    line:"Orange",
   Station:["North Station",
  "Haymarket",
   "Park Street",
  "State",
  "Downtown Crossing",
  "Chinatown",
   "Back Bay",
  "Forest Hills"]
  }
  ]
//}
  
var start_Line;
var start_Sta;
var end_Line;
var end_Sta;
var int1;
  var int2;
  var stop;
    
  
  for (var i = 0; i<mbta.length; i++){
     
    if (StartLine == mbta[i].line){
      start_Line = mbta[i].line
     start_Sta = mbta[i].Stations.indexOf(StartStation);
      int1 = mbta[i].Stations.indexOf("Park Street");
    }
    
    if (EndLine == mbta[i].line){
      end_Line = mbta[i].line
     end_Sta = mbta[i].Stations.indexOf(EndStation);
      int2 = mbta[i].Stations.indexOf("Park Street");
    }
  }
  if ( StartLine == EndLine){
    stop = Math.abs(start_Sta - end_Sta);
    return stop + " stop";
  }

}
  
  console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'));