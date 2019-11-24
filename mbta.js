//Will create one object has this modul with three objects inside

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


    //----------- Bons 



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
        // count first distance from current to Park Street
        // second distance from curent to park street also 
        // sum the and get the totall 

        tripOne = tripOne - (subway[stratLine].indexOf("Park Street") + 1);
        tripTwo = tripTwo - (subway[endLine].indexOf("Park Street") + 1);

        // convert any negitve value to positive
        tripOne = Math.abs(tripOne);
        tripTwo = Math.abs(tripTwo);

        total = tripTwo + tripOne;
    }


    console.log("// " + total + " stops")
}


stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore');












