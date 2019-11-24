 
 const stations01 = {
 
    red :[
       'South Station',
       'Park Street',
       'Kendall',
       'Central',
       'Harvard',
       'Porter',
       'Davis',
       'Alewife']
   ,
   
    green : [
           'Government Center',
           'Park Street',
           'Boylston',
           'Arlington',
           'Copley',
           'Hynes',
           'Kenmore',
            ]
   
   ,
   
    orange :  [
      'North Station',
      'Haymarket',
      'Park Street',
      'State',
      'Downtown Crossing',
      'Chinatown',
      'Back Bay',
      'Forest Hills',
   ],
   
   stopsBetweenStations : function(a,b,c,d) {
     let obj = 0;
      for (let i in stations01){
        if (a == stations01[i]){
          for(let j = 0 ; j<stations01[i].length;j++){
            if ( b == stations01[i][j]){
            obj += 1; 
   
   
            console.log(obj)
            }
          }
        }
      }
   
         for (let i in stations01){
           let obj2 = 0;
        if (c == stations01[i]){
          for(let j = 0 ; j<stations01[i].length;j++){
            obj += 1;
            if (stations01[i][j] == d){
              obj -=  stations01[i][j].length
   
            console.log(obj)
            
            }
          }
        }
      }
   
   
   
   },
   
   
   }
    
    stations01.stopsBetweenStations(stations01.red, 'Harvard', stations01.red, 'Alewife') ;
   
    