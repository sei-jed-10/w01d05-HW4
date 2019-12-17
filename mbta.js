//lines object with stops list
var lines = {
    'Red' : ['South Station', 'Kendall', 'Central','Harvard', 'Park Street', 'Porter', 'Davis', 'Alewife'],
    'Green' : ['Government Center','Boylston', 'Arlington', 'Park Street', 'Copley', 'Hynes', 'Kenmore'],
    'Orange' : ['North Station', 'Haymarket', 'State', 'Downtown Crossing', 'Chinatown', 'Park Street', 'Back Bay','Forest Hills']
}

//function to get total number of stops between two stations
function stops_between_stations(start_line, start_station, end_line, end_station) {
var stops = lines[start_line]		//get all stations for start line
start_station_index = stops.indexOf(start_station) 		//get index for start_station
common_station_index = stops.indexOf(getCommonStation())		//get index for intersected station for all subway lines
start_diff = start_station_index - common_station_index		//#finding the index difference for start_station and intersected station,this will be
                                                        //the total number of stops for the start line
console.log('You must travel through the following stops on the ', start_line,' Line:')
if(start_station_index <= common_station_index)  		//#if start_station_index is at 2 and common_station_index is 4, the range will be (2 to 4).
stop_names = getStopNames(stops, start_station_index, common_station_index) 	//get stop names
else
stop_names = getStopNames(stops, common_station_index, start_station_index).reverse()
console.log(stop_names)
console.log('Change at ', getCommonStation(),'.')
stops = lines[end_line]		//get all stations for end_station
end_station_index = stops.indexOf(end_station)	//get end station index
common_station_index = stops.indexOf(getCommonStation())
end_diff = end_station_index - common_station_index //the total number of stops for the end line
if(end_station_index <= common_station_index)
stop_names = getStopNames(stops,end_station_index, common_station_index).reverse()   //get stops name with start and end range
else
stop_names = getStopNames(stops, common_station_index, end_station_index)
console.log('Your trip continues through the following stops on the ', end_line, ' Line:')
console.log(stop_names)
//adding both start and end line stops count to get total number of stops count
console.log(Math.abs(start_diff) + Math.abs(end_diff) , ' Stops in total')
}


//gets the stop names with the range of start and ends index
function getStopNames(stops, start, ends) {

stop_names = []
while(start <= ends) {
stop_names.push(stops[start])
start=start+1
}
return stop_names
}

//gets common intersected station name for all three lines
function getCommonStation() {
return 'Park Street'
}


stops_between_stations('Red', 'Central', 'Orange', 'Chinatown')
