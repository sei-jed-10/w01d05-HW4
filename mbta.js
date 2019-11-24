const subwayLines = {
    red : ['South Station',
            'Park Street',
            'Kendall',
            'Central',
            'Harvard',
            'Porter',
            'Davis',
            'Alewife'],
    green : ['Government Center',
            'Park Street',
            'Boylston',
            'Arlington',
            'Copley',
            'Hynes',
            'Kenmore'],
    orange : ['North Station',
            'Haymarket',
            'Park Street',
            'State',
            'Downtown Crossing',
            'Chinatown',
            'Back Bay',
            'Forest Hills']

};

var stops;
/*var indexofStartStation;
var indexofEndStation;

var indexofParkStreet_start;
var indexofParkStreet_end;*/
var total_stops;

function stopsBetweenStations (startLine,startStation,endLine,endStation){

        const indexofStartStation = subwayLines[startLine.toLowerCase()].indexOf(startStation);
        const indexofEndStation = subwayLines[endLine.toLowerCase()].indexOf(endStation);

        if(startLine == endLine){//same line
                
                stops = Math.abs(indexofEndStation - indexofStartStation);//distance between board,arrival
                
                console.log(stops+' stops');
            
        } if(startLine !== endLine){      
                //index of park street stop on the start line
                const indexofParkStreet_start = subwayLines[startLine.toLowerCase()].indexOf('park street');
                //index of park street stop on the end line
                const indexofParkStreet_end = subwayLines[endLine.toLowerCase()].indexOf('park street');

                //distance between start station,park street at start line
                const  parkStreetStartLine = Math.abs(indexofStartStation - indexofParkStreet_start);
                //distance between end station,park street at end line 
                const parkStreetEndLine = Math.abs(indexofParkStreet_end - indexofEndStation);

                total_stops = parkStreetStartLine + parkStreetEndLine;
                console.log(total_stops+' stops');
        }

}
//stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station');//7 stops
//stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')
//stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')//0 stops

