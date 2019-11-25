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
     
    if (start_Line == mbta[i].line){
      start_Line = mbta[i].line
     start_Sta = mbta[i].stations.indexOf(start_Sta);
      int1 = mbta[i].stations.indexOf("Park Street");
    }
    
    if (end_Line == mbta[i].line){
      end_Line = mbta[i].line
     end_Sta = mbta[i].stations.indexOf(end_Sta);
      int2 = mbta[i].stations.indexOf("Park Street");
    }
  }
  if (start_Line == end_Line){
    stop = Math.abs(int1 - int2);
    return stop + " stop";
  }

}
  
  console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'));