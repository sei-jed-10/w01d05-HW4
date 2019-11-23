
//Declaring and initializaing 3 arrays representing each subway line: Red, Green , and Orange.
var redSubwayLine = ["South Station", "Park Street", "Kendall,Central", "Harvard", "Porter", "Davis", "Alewife"];

var greenSubwayLine = ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"];

var orangeSubwayLine = ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"];

//intersection variable holds the value of the station that intersects the three subway lines.
var intersection = "Park Street";


function stopsBetweenStations(startLine, startStation, endLine, endStation) {
    var numberOfStops = 0; //Will use it as a counter for each station the rider stops by.
    var startSubwayLineList = getSubwayLineList(startLine); //store the array representing the start line in another called startSubwayLineList
    var endSubwayLineList = getSubwayLineList(endLine); //store the array representing the end line in another called endSubwayLineList

    if (startSubwayLineList == "error" || endSubwayLineList == "error") { //if either the start or end subway line name is wrong.
        console.log("Sorry you entered an invalid subway line name!"); //Display a message informing the user about their wrong entry.
    }

    else { //Otherwise, start by checking whether the user entered valid subway station names.
        if (!(validateInputStations(startSubwayLineList, startStation) || validateInputStations(endSubwayLineList, endStation))) {
            console.log("Sorry you entered an invalid stop station name!"); //Display an error message if the user didn't.
        }
        else { //Once the function's input has been validated, start working by outputing where the rider boards the train (start line and station). 
            console.log("Rider boards the train a " + startLine + " Line and " + startStation + ".");
            var startIndex = startSubwayLineList.indexOf(startStation) + 1; //get the index of the start station in its line's array.

            //if the start line the same as the end line
            if (startLine == endLine) {
                if (startStation == endStation) {
                    console.log("Start and end stations are the same"); 
                    console.log("Total number of stops= " + numberOfStops+"\n"); //Number of stops will be 0.
                    return;
                }
                //In case the end station is a one the train has already passed by (from the start station).
                if (alreadyPassedByStation(startSubwayLineList, endStation, startIndex)) {
                    startSubwayLineList = startSubwayLineList.reverse(); //Reverse the start line array (to be able to get to the end station).
                    startIndex = startSubwayLineList.indexOf(startStation) + 1; //Update the index of the station which we'll start our loop with.
                }
            }


            for (i = startIndex; i < startSubwayLineList.length; i++) {
                console.log("Rider arrives at " + startLine + " Line and " + startSubwayLineList[i] + "."); //Output the rider's current station.
                numberOfStops++; //Increment the number of stops

                //If the rider arrived at an intersection
                if (startSubwayLineList[i] == intersection && (startLine != endLine)) {
                    console.log("Rider transfers from " + startLine + " Line to " + endLine + " Line at " + startSubwayLineList[i] + ".");
                    currentIndex = endSubwayLineList.indexOf(intersection) + 1;
                    for (j = currentIndex; j < endSubwayLineList.length; j++) {
                        //if the rider arrived at their destination.
                        if (endSubwayLineList[j] == endStation) {
                            console.log("Rider arrives at " + endLine + " Line and " + endSubwayLineList[j] + ".");
                            console.log("Rider exits the train at " + endLine + " Line and " + endStation + ".");
                            numberOfStops++
                            console.log("Total number of stops= " + numberOfStops+"\n");
                            return;
                        }
                        //else, the destination hasn't been reached yet.
                        console.log("Rider arrives at " + endLine + " Line and " + endSubwayLineList[j] + ".");
                        numberOfStops++
                    }
                } //Intersection case resolved.

                //Otherwise, continue riding the same subway line until the train comes to the destination.
                if (startSubwayLineList[i] == endStation) {
                    console.log("Rider exits the train at " + endLine + " Line and " + endStation + ".");
                    numberOfStops++;
                    console.log("Total number of stops= " + numberOfStops+"\n");
                }
            } //end of outer for loop.
        } //end of else clause.
    } //end of outer else clause.

}

stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Copley') // 4 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops


//getsubwayLineList function takes a string representing the subway line name and returns the array representing it.
function getSubwayLineList(inputLine) {
    if (inputLine == "Red") {
        return redSubwayLine;
    }
    else if (inputLine == "Green") {
        return greenSubwayLine;
    }
    else if (inputLine == "Orange") {
        return orangeSubwayLine;
    }
    else { //In case the input wasn't any of the three values above, return an error message.
        return "error";
    }
}

// a function that validates wether the user included a valid station name as input, by comparing it to other values in the respective line list.
function validateInputStations(inputLine, inputStation) {
    for (i = 0; i < inputLine.length; i++) {
        if (inputLine[i] == inputStation) {
            return true; //if the entered station name is valid, return true.
        }
    }
    return false; //otherwise, return false.
}

//a function that is used to check whether the end station in the subway line has already been passed by (from where we currently are)
function alreadyPassedByStation(subwayLine, station, currentIndex) {
    for (i = currentIndex; i < subwayLine.length; i++) {
        if (subwayLine[i] == station) {
            return false;
        }
    }
    return true;
}
