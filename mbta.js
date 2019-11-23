function stopsBetweenStations(StartLine, StartStation, EndLine, EndStation){
    const subways = [
    {
        line : "Red",
        stations : ["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"]
    },
    {
        line : "Green",
        stations : ["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"]
    },
    {
        line : "Orange",
        stations : ["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"]
    }
                    ];

//    //bouns
  if(StartLine !== 'Red' && StartLine !== 'Green' && StartLine !== 'Orange' || EndLine !== 'Red' && EndLine !== 'Green' && EndLine !== 'Orange' )
  return "The line is wrong";

//   //only accepts the correct stops for each of their stops.
//  if( (EndLine == 'Red' )&& (EndStation !== "Alewife") || (EndLine == 'Green' )&& (EndStation !== "Kenmore") || (EndLine == 'Orange' )&& (EndStation !== "Forest Hills") )
//  return "The last destination not in this line ";
// //
    
      var indexofStartStation = 0;
      var indexofEndStation = 0;
      var sharedPoint = 0;
      var sharedPoint2 = 0;
      var totalSteps = 0;
      
      for( i = 0 ; i < subways.length ;i++){
      
        for(j=0;j< subways[i].stations.length; j++){
        
        if (StartLine == subways[i].line){
          indexofStartStation = subways[i].stations.indexOf(StartStation);
          sharedPoint =  subways[i].stations.indexOf("Park Street");
                                  }
         if (EndLine == subways[i].line){
           indexofEndStation = subways[i].stations.indexOf(EndStation);
           sharedPoint2 =  subways[i].stations.indexOf("Park Street");
           
                                  }                          
                  }
      }
      if(StartLine == EndLine)
         totalSteps =  indexofStartStation-indexofEndStation ;
       else totalSteps = (indexofEndStation - sharedPoint2) + (sharedPoint-indexofStartStation);
//    //bouns       
	  console.log("Rider Transfers from " + StartLine + " line from " + StartStation);
	  console.log("Rider Arrives to " + EndLine + " line At " + EndStation);	
                                  
     return totalSteps;
     }
    
    console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')) // 0 stops
    console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')) // 7 stops
    console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')) // 6 stops