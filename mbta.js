
//In this modul, one object will be ctreated and inside this 
// Object three objects.

//Total number of stop stations 
let total = 0;


let subway = {
    // first object 
    "Red": [
        "South Station",
        "Park Street",
        "Kendall",
        "Central",
        "Harvard",
        "Porter",
        "Davis",
        "Alewife"],
    "Green": [
        "Government Center",
        "Park Street",
        "Boylston",
        "Arlington",
        "Copley",
        "Hynes",
        "Kenmore"],

    "Orange": [
        "North Station",
        "Haymarket",
        "Park Street",
        "Downtown Crossing",
        "Chinatown",
        "Back Bay",
        "Forest Hills"]
}



function stopsBetweenStations(stratLine, startStation, endLine, endStation) {


    //----------- Bonus 

    // create array and store the objects in the array.
    let objAray = Object.keys(subway)


    //get the index address of the input
    var idxStartLine = objAray.indexOf(stratLine);
    var idxEndLine = objAray.indexOf(endLine);


    //check if input of the lines are exist
    if (idxStartLine != -1 && idxEndLine != -1) {

        // creat an arrays for to hold start station and end station 
        let startSta = subway[stratLine];
        let endSta = subway[endLine];


        // get the index address and return -1 if its no there
        let idxStartSta = startSta.indexOf(startStation);
        let idxEndSta = endSta.indexOf(endStation);

        if (idxStartSta == -1 || idxEndSta == -1) {
            console.log("Please Enter a Correct Station Stop");
            return;

        }



        // ---------------------------------------------  
        //get the index of each station
        let tripOne = subway[stratLine].indexOf(startStation);
        let tripTwo = subway[endLine].indexOf(endStation);
        //add one to the index  
        tripOne += 1;
        tripTwo += 1;

        // check if it trip in the same line
        if (stratLine == endLine) {
            total = tripOne - tripTwo;
            // get positive value only
            if (total < 0) {
                // Multiply number with -1 
                // convert to positive 
                total = total * -1;
            }
            // Return the positive number   

        }
        else {

            // count the dist form current station to the intersection point
            tripOne = tripOne - (subway[stratLine].indexOf("Park Street") + 1);
            tripTwo = tripTwo - (subway[endLine].indexOf("Park Street") + 1);

            // convert any negitve value to positive
            tripOne = Math.abs(tripOne);
            tripTwo = Math.abs(tripTwo);

            total = tripTwo + tripOne;
        }


        //calculate the stop 
        console.log(`//${total} stops`)
        // print as per request.
        console.log(`//Rider boards the train ${stratLine} line and ${startStation} .\n//Rider arrives at ${stratLine} Line and Park Street. \n //Rider transfers from ${stratLine} Line to ${endLine} at Park Street. \n //Rider arrives at ${endLine} Line and ${endStation}. \n //Rider exits the train at ${endLine} Line and ${endStation}. `)



    }
    else if (idxStartLine == -1 || idxEndLine == -1) {
        console.log("Please Enter Red, Green, or Orange only to start your trip")
        return;
    }




}






stopsBetweenStations('Red', 'Porter', 'Green', 'Copley');












