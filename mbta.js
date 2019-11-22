var redSubwayLine = ["South Station", "Park Street", "Kendall,Central", "Harvard", "Porter", "Davis", "Alewife"];

var greenSubwayLine = ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"];

var orangeSubwayLine = ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"];

var intersection = "Park Street";
var numberOfStops = 0;


function stopsBetweenStations(startLine, startStation, endLine, endStation) {
    numberOfStops = 0;
    var startSubwayLineList = getSubwayLineList(startLine);
    var endSubwayLineList = getSubwayLineList(endLine);
    if (startSubwayLineList == "error" || endSubwayLineList == "error") {
        console.log("Sorry you entered an invalid subway line name!");
    }

    else {
        if (!(validateInputStations(startSubwayLineList, startStation) || validateInputStations(endSubwayLineList, endStation))) {
            console.log("Sorry you entered an invalid stop station name!");
        }
        else { //Start the function
            console.log("Rider boards the train a " + startLine + " Line and " + startStation + ".");
            var startIndex = startSubwayLineList.indexOf(startStation) + 1;

            //if the start line the same as the end line
            if (startLine == endLine) {
                if (startStation == endStation) {
                    console.log("Start and end stations are the same");
                    console.log("Total number of stops= " + numberOfStops);
                    return;
                }
                if (alreadyPassedByStation(startSubwayLineList, endStation, startIndex)) {
                    startSubwayLineList = startSubwayLineList.reverse();
                    startIndex = startSubwayLineList.indexOf(startStation) + 1;
                }
            }


            for (i = startIndex; i < startSubwayLineList.length; i++) {
                console.log("Rider arrives at " + startLine + " Line and " + startSubwayLineList[i] + ".");
                numberOfStops++;
                if ((startIndex == startLine.indexOf(intersection) && startLine != endLine)) {

                }

                //Rider Arrives at an intersection
                if (startSubwayLineList[i] == intersection && (startLine != endLine)) {
                    console.log("Rider transfers from " + startLine + " Line to " + endLine + " Line at " + startSubwayLineList[i] + ".");
                    currentIndex = endSubwayLineList.indexOf(intersection) + 1;
                    for (j = currentIndex; j < endSubwayLineList.length; j++) {
                        //if the rider arrived at their destination.
                        if (endSubwayLineList[j] == endStation) {
                            console.log("Rider arrives at " + endLine + " Line and " + endSubwayLineList[j] + ".");
                            console.log("Rider exits the train at " + endLine + " Line and " + endStation + ".");
                            numberOfStops++
                            console.log("Total number of stops= " + numberOfStops);
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
                    console.log("Total number of stops= " + numberOfStops);
                }

            } //end of outer for loop.
        } //end of else clause.
    } //end of outer else clause.

}

stopsBetweenStations('Red', 'South Station', 'Green', 'Copley')
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops


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
    else {
        return "error";
    }
}

function validateInputStations(inputLine, inputStation) {
    for (i = 0; i < inputLine.length; i++) {
        if (inputLine[i] == inputStation) {
            return true;
        }
    }
    return false;
}
function alreadyPassedByStation(subwayLine, station, currentIndex) {
    for (i = currentIndex; i < subwayLine.length; i++) {
        if (subwayLine[i] == station) {
            return false;
        }
    }
    return true;
}
