// 11/23/2019
// HW4
// Fahad Alturkistani
///////////////////////

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
  
  var redStops = null;
  var orangeStops= null;
  var greenStops=null;
  
  
  function redRed(startStop,endStop){
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
  };
  
  function greenGreen(startStop, endStop){
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
  
  };
  
  function orangeOrange(startStop, endStop){
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
  
  };
  
  function countStops(startLine,startStop,endLine, endStop){
  
    if (startLine == "Red" && endLine == "Red"){
      return redRed(startStop,endStop);
    }
  
  if (startLine == "Green" && endLine == "Green"){
      return greenGreen(startStop,endStop);
    }
  
  if (startLine == "Orange" && endLine == "Orange"){
      return orangeOrage(startStop, endStop);
    }
  
  if(startLine == "Red" && endLine == "Orange"){
      redStops = redRed(startStop,"Park Street");
      orangeStops = orangeOrange("Park Street", endStop);
      return (redStops+orangeStops+1);
   }
  
  if(startLine == "Orange" && endLine == "Red"){
      redStops = redRed("Park Street",endStop);
      orangeStops = orangeOrange(startStop, "Park Street");
      return (redStops+orangeStops+1);
   }
  
   if(startLine == "Red" && endLine == "Green"){
      redStops = redRed(startStop,"Park Street");
      greenStops = greenGreen("Park Street", endStop);
      return (redStops+greenStops+1);
   }
    if(startLine == "Green" && endLine == "Red"){
      redStops = redRed("Park Street",endStop);
      greenStops = greenGreen(startStop,"Park Street");
      return (redStops+greenStops+1);
   }
  
   if(startLine == "Orange" && endLine == "Green"){
      orangeStops = orangeOrange(startStop, "Park Street");
      greenStops = greenGreen("Park Street", endStop);
      return (redStops+greenStops+1);
   }
    if(startLine == "Green" && endLine == "Orange"){
      greenStops = greenGreen(startStop,"Park Street");
      orangeStops = orangeOrange("Park Street", endStop);
      return (redStops+greenStops+1);
   }
  
  
  };
  
  //countStops("Red", "Kendall","Red", "Park Street");
  // countStops("Red", "Alewife","Red", "Kendall");
  //countStops("Green", "Park Street","Green", "Kenmore");
  //countStops("Green", "Kenmore","Green", "Park Street");
  //countStops("Orange", "Park Street","Orange", "Chinatown");
  //countStops("Orange", "Chinatown","Orange", "Park Street");
  
  countStops("Red", "Alewife", "Orange", "Chinatown");
  

  ////// END OF SOLUTION //////