const red ={
    redStations: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"]
};

const green ={ 
  greenStations: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"]
};

const orange= {
    orangeStations: ["North Station","Haymarket" , "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
};

function stopsBetweenStations (line1, station1, line2, station2){
    var stops=0;
    var station11;
    var station22;

    if(line1=="Red"){
      station11=red.redStations;

    }
    else if(line1=="Green"){
      station11=green.greenStations;
    }
    else if(line1=="Orange"){
      station11=orange.orangeStations;
    }
    else {//if(line1!="Red"||line1!="Green"||line1!="Orange"){
     return "Invalid line for line 1"
    }

    if(line2=="Red"){
      station22=red.redStations;
    }
    else if(line2=="Green"){
      station22=green.greenStations;

    }
    else if(line2=="Orange"){
      station22=orange.orangeStations;
    }
    else {//if(line1!="Red"||line1!="Green"||line1!="Orange"){
      return "Invalid line for line 2"
    }
        for(var i=0;i<station11.length;i++){
          
         if(line1==line2 && station1==station2){
               return stops+" stops";
         }                   

            else if(station1==station11[i]){
              if((station11.indexOf(station1))>(station22.indexOf(station2))){
                i=station22.indexOf(station2);

                for(var j=i;j<station22.length;j++){
                  if(station1 != station11[j]){
                    stops++;
                  }
                  else {
                    return stops+" stops";
                  }
                }
              }
              else{             
                for(var j=i;j<station22.length;j++){
                  if(station2 != station22[j]){
                    stops++;
                  }
                  else {
                    return stops+" stops";
                  }
                }
              }
            }
        }       
   }

stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops     