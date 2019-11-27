
debugger;
let subway = {
    red: ["South Station", "Park Street" ,"Kendall" ,"Central" ,"Harvard" ,"Porter" ,"Davis" ,"Alewife"],
    green: ["Government" ,"Center" ,"Park Street" ,"Boylston" ,"Arlington" ,"Copley" ,"Hynes" ,"Kenmore"],
    orange: ["North Station" ,"Haymarket" ,"Park Street" ,"State" ,"Downtown Crossing" ,"Chinatown" ,"Back Bay" ,"Forest Hills"],
    stopsBetweenStations: function(startline,startstation,endline,endstation) {
            let steps = 0;
            let Startstation = this[startline].indexOf(startstation);
            let Endstation = this[endline].indexOf(endstation);
            let breakPointF = this[startline].indexOf("Park Street");
            let breakPointE = this[endline].indexOf("Park Street");
            let result =0;
            if(startline == endline) {

                result = Math.abs(Startstation - Endstation);  
            } else if(startline != endline) {
                
                steps = Math.abs(Startstation - breakPointF); // 5
                result = Math.abs(Endstation - breakPointE) + steps; // 3 , 3 + 5 
            }

            return result;
            } }
subway.stopsBetweenStations("red","kendall","orange","state");
