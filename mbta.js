 
//  let subways = {
//     [
//     red = {
//         1: "South station",
//         2: "South Station",
//         3: "Park Street",
//         4: "Kendall",
//         5: "Central",
//         6: "Harvard",
//         7: "Porter",
//         8: "Davis",
//         9: "Alewife",
//     },
//     green = {
//            "Government Center",
//            "Park Street",
//            "Boylston",
//            "Arlington",
//            "Copley",
//            "Hynes",
//            "Kenmore",
//     },
//     Orange = {

//     }
//     ]

// }
debugger;
let subway = {
    red: ["South Station", "Park Street" ,"Kendall" ,"Central" ,"Harvard" ,"Porter" ,"Davis" ,"Alewife"],
    green: ["Government" ,"Center" ,"Park Street" ,"Boylston" ,"Arlington" ,"Copley" ,"Hynes" ,"Kenmore"],
    orange: ["North Station" ,"Haymarket" ,"Park Street" ,"State" ,"Downtown Crossing" ,"Chinatown" ,"Back Bay" ,"Forest Hills"],
    stopsBetweenStations: function(startline,startstation,endline,endstation) {
            let steps = 0;
            if(startstation == endstation) {
                return steps =0;
            }
            for(let i in subway){
                if(startline == subway[i]) { // red 
                    // console.log("Rider boards the train a " +startline  +" Line and " +startstation);
                    for(let j=0; j<subway[i].length; j++ ){ // 0 , 1 ,2
                        if(subway[i][j] == startstation){ // gover , center , parkstreet 
                            // console.log("Rider arrives at " +startline + " Line and " +subway[i][j]);
                            steps += 1; // 0 , 1, , 2
                        }
                        if(subway[i][j] == "Park Street"){ // gover , center , parkstreet
                            steps -=1;
                            break;
                        }
                        // if(startstation == subway[i][j]) {
                        //     console.log(steps);
                        // }
                    }
                }
            } 
            for(let i in subway){
                if(endline == subway[i]){
                    let j=0;
                    // console.log("Rider transfers from " +startline[i] + " Line to " +endline[i] + " Line at " +subway[i][j]);
                    while(subway[i][j] != "Park Street"){
                            subway[i].shift();
                            j++
                    }
                    for(let h=0; h<subway[i].length; h++){
                        steps += 1;
                        // console.log("Rider arrives at " +endline + " Line and " +subway[i][h]);
                        if(subway[i][h] == endstation){
                            break;
                        }
                    }
                }
                // if(endline == subway[i]){
                //         if(subway[i][j] == "Park Street"){
                //             for(let j=0; j<subway[i];j++){
                                
                //             }
                //         }
                // }
            }
            return steps -1;   
    },
}
subway.stopsBetweenStations(subway.red,"South Station",subway.orange,"Kenmore");














































// function nameba(name) {
//     return name;
// }

// function ages(age) {
//     return age;
// }


// function nameAge(nameba,age){
//     return nameba + age;
// }