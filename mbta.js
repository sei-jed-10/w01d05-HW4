 const subway =  {  Red:[ "South Station"
    ,"Park Street"
     ,"Kendall"
    , "Central"
    ,"Harvard"
    , "Porter"
    , "Davis"
    , "Alewife"] , 
    Green:[
    , "Government Center"
    , "Park Street"
    , "Boylston"
    , "Arlington"
    , "Copley"
    , "Hynes"
    , "Kenmore"       
    ]
    , Orange: [ 
    , "North Station"
    , "Haymarket"
    , "Park Street"
    , "State"
    , "Downtown Crossing"
    , "Chinatown"
    , "Back Bay"
    , "Forest Hills"
     ],

}

function  stopsBetweenStations(StartLine ,StartStation, EndLine, EndStation){ 
let count=0;
let stop1,stop2 ,station1,station2;


if(StartLine==EndLine&&StartStation==EndStation||StartStation==EndStation)  { 

return 0;

}  

else {   

 stop1=  subway[StartLine];
   station1=stop1.indexOf(StartStation);
 stop2= subway[EndLine]
 station2=stop2.indexOf(EndStation);

 if( stop2==stop1){                   
  return  count=station1-station2 }
else{                                    
    return  count=(station2-station1)-1;    
}
       
     /* for (let i =0;i<subway.StartLine[]length;i++) {
         if ( subway.line==StartStation){ 
           count++;


         }   if ( subway[StartLine[i]]!=EndStation ){
              // console.log(  subway.line[i]   )
          count +=1
           
         }
         return count;
  
      }*/
       


  }    

       
                                             

}






  







console.log( stopsBetweenStations('Red', 'Alewife', 'green', 'Alewife') )// 0 stops
 console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')) // 7 stops
console.log( stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore' ))// 6 stops