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
  
  function orangeOrage(startStop, endStop){
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
  
  // if(startLine == "Red" && endLine == "Orange"){
  //     startIndex = linesStops.Red.indexOf(startStop);
  //     endIndex = linesStops.Orange.indexOf(endStop);
  //     if (startIndex < redIntersect) {
  //       stops = 1;
  //       for (i=orangeIntersect; i<endIndex; i++){
  //          stops += 1;
  //       }
  //       return stops-1;
  //     } 
  
  
  //     if (startIndex > redIntersect){
  //       for (i=redIntersect; i<startIndex ;i++){
  //         stops +=1;
  //       }
  //       for(){
          
  //       }
  //     }
  // }
  
  
  
  };
  
  // countStops("Red", "Kendall","Red", "Alewife");
  // countStops("Red", "Alewife","Red", "Kendall");
  //countStops("Green", "Park Street","Green", "Kenmore");
  //countStops("Green", "Kenmore","Green", "Park Street");
  //countStops("Orange", "Haymarket","Orange", "Chinatown");
  countStops("Orange", "Chinatown","Orange", "Haymarket");