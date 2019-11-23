

// HW4
// 11/23/2019
// Fahad Alturkistani
///////////////////////////////
//
//
//
//

const linesStops = {
    Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
  
    Green:["Government Center", "Park Street", "Boylston","Arlington", "Copley", "Hynes", "Kenmore"],
  
    Orange:["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
  };
  
  var stops = 0;
  var intersect=null;
  var startIndex=null;
  var endIndex=null;
  var stopsBefore= null;
  var stopsAfter= null;
  var redIntersect =1;
  var greenIntersect = 1;
  var orangeIntersect = 2;
  
  function countStops(startLine,startStop,endLine, endStop){
  
    if (startLine == "Red" && endLine == "Red"){
      startIndex = linesStops.Red.indexOf(startStop);
      endIndex = linesStops.Red.indexOf(endStop);
      if (startIndex < endIndex){
        for(i=startIndex;i<endIndex;i++)
        {
          stops += 1;
        }
        return stops-1;
      } 
      if (startIndex > endIndex) {
        for(i=endIndex;i<startIndex;i++)
        {
          stops += 1;
        }
        return stops-1;
      } 
    }
  
  if (startLine == "Green" && endLine == "Green"){
      startIndex = linesStops.Green.indexOf(startStop);
      endIndex = linesStops.Green.indexOf(endStop);
      if (startIndex < endIndex){
        for(i=startIndex;i<endIndex;i++)
        {
          stops += 1;
        }
        return stops-1;
      } 
      if (startIndex > endIndex) {
        for(i=endIndex;i<startIndex;i++)
        {
          stops += 1;
        }
        return stops-1;
      } 
    }
  
  if (startLine == "Orange" && endLine == "Orange"){
      startIndex = linesStops.Orange.indexOf(startStop);
      endIndex = linesStops.Orange.indexOf(endStop);
      if (startIndex < endIndex){
        for(i=startIndex;i<endIndex;i++)
        {
          stops += 1;
        }
        return stops-1;
      } 
      if (startIndex > endIndex) {
        for(i=endIndex;i<startIndex;i++)
        {
          stops += 1;
        }
        return stops-1;
      } 
    }
  
  if(startLine == "Red" && endLine == "Orange"){
      startIndex = linesStops.Red.indexOf(startStop);
      endIndex = linesStops.Orange.indexOf(endStop);
      if (startIndex < redIntersect) {
        stops = 1;
        for (i=orangeIntersect; i<endIndex; i++){
           stops += 1;
        }
        return stops-1;
      } 
      if (startIndex > redIntersect){
        for (i=redIntersect; i<startIndex ;i++){
          stops +=1;
        }
        for(){
          
        }
      }
  }
  
  
  
  };
  
  countStops("Red", "Davis","Orange", "Chinatown");