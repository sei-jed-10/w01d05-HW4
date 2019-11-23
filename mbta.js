var MBTA = {
    Red: [
        "South Station" ,
        "Park Street"  ,
        "Kendall" ,
        "Harvard" ,
        "Porter" ,
        "Davis" ,
        "Alewife" 
  ] ,
    Green:[
        "Government Center" ,
        "Park Street"  ,
        "Boylston" ,
         "Arlington" ,
        "Copley" ,
         "Hynes" ,
        "Kenmore" ,
      ],
    Orange:["North Station",
    "Haymarket",
    "Park Street",
    "State",
    "Downtown Crossing"
    ,"Chinatown",
    "Back Bay",
    "Forest Hills"]
  
  }
  function stopsBetweenStations(startLine , startStation,endLine ,endStation){
    var countRed = 0
    var countGreen = 0
    var countOrange = 0
    var countStops = 0
    //Red Line
    if(startLine == "Red"  == true || endLine == "Red"  == true ){
      for(var i in MBTA.Red){
        
        if(MBTA.Red.includes(startStation) == true && MBTA.Red.includes(endStation)){
          countRed += (MBTA.Red.indexOf(endStation)+1) - ( MBTA.Red.indexOf(startStation)+1)
         // console.log("The number of stops is " + Math.abs(countRed))
          break ; // stop the loop
         }
         else if(MBTA.Red.includes(startStation) == true){
           Math.abs(countRed)
           countRed += (MBTA.Red.indexOf(startStation)+1) - (MBTA.Red.indexOf("Park Street")+1)
           //console.log(countRed)
           break ;
         }
         else if(MBTA.Red.includes(endStation) == true){
          Math.abs(countRed)
           countRed += (MBTA.Red.indexOf(endStation)+1) - (MBTA.Red.indexOf("Park Street")+1)
          // console.log("The end red "+Math.abs(countRed))
           break ;
         }
      }
  
     
  }
  //Green Line
    if(startLine == "Green"  == true || endLine == "Green" == true){
      for(var i in MBTA.Green){
        
        if(MBTA.Green.includes(startStation) == true && MBTA.Green.includes(endStation)){
  
          countGreen += (MBTA.Green.indexOf(endStation)+1) - ( MBTA.Green.indexOf(startStation)+1)
          //console.log("The number of stops is " + Math.abs(countGreen))
          break ; // stop the loop
         }
         else if(MBTA.Green.includes(startStation) == true){
           // add to the counter if its already contain any number from the red stations
           Math.abs(countGreen)
           countGreen += ((MBTA.Green.indexOf(startStation)+1) - (MBTA.Green.indexOf("Park Street")+1))
           //console.log("the start Green "+ Math.abs(countGreen))
           break ;
         }
         else if(MBTA.Green.includes(endStation) == true){
           Math.abs(countGreen)
           countGreen += (MBTA.Green.indexOf(endStation)+1) - (MBTA.Green.indexOf("Park Street")+1)
           
                    //console.log(Math.abs(countGreen))
  
           break ;
         }
      }
  
     
  }  
    if(startLine == "Orange"  == true || endLine == "Orange"  == true ){
      for(var i in MBTA.Orange){
        
        if(MBTA.Orange.includes(startStation) == true && MBTA.Orange.includes(endStation)){
          countOrange += (MBTA.Orange.indexOf(endStation)+1) - ( MBTA.Orange.indexOf(startStation)+1)
         // console.log("The number of stops is " + Math.abs(countOrange))
          break ; // stop the loop
         }
         else if(MBTA.Orange.includes(startStation) == true){
           Math.abs(countOrange)
           countOrange += (MBTA.Orange.indexOf(startStation)+1) - (MBTA.Orange.indexOf("Park Street")+1)
           //console.log(countRed)
           break ;
         }
         else if(MBTA.Orange.includes(endStation) == true){
          Math.abs(countOrange)
           countOrange += (MBTA.Orange.indexOf(endStation)+1) - (MBTA.Orange.indexOf("Park Street")+1)
          // console.log("The end red "+Math.abs(countRed))
           break ;
         }
      }
  }
  
    countStops = Math.abs(countOrange) + Math.abs(countGreen) + Math.abs(countRed)
  console.log("The number of stops is "+Math.abs(countStops))
  }
  ;
  stopsBetweenStations("Red","Davis","Orange","Downtown Crossing") ;
  
  