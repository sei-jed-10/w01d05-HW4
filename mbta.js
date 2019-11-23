// stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
const subwayLines = {Red:['South Station', 'Park Street', 'Kendall', 'Central', 'Porter', 'Davis', 'Alewife'],Green:['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],Orange:['North Station', 'Haymarket', 'Park Street', 'state', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']}

// stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
//   stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
    const startStationIndex = subwayLines[startLine].indexOf(startStation);
    
    const endStationIndex = subwayLines[endLine].indexOf(endStation);
    
    if (startLine === endLine) {
      return Math.abs(startStationIndex - endStationIndex);
    }
    const startLineParkStreetIndex = subwayLines[startLine].indexOf('Park Street');
  
    const tripToParkStreet = Math.abs(startStationIndex - startLineParkStreetIndex);
    
    const endLineParkStreetIndex = subwayLines[endLine].indexOf('Park Street');
    //   calculate the difference between the end station index and end line Park Street index
    //   take the absolute value of that difference to get the trip to destination length
    const tripToDestination = Math.abs(endStationIndex - endLineParkStreetIndex);
  
    const totalTrip = (tripToParkStreet + tripToDestination);
  
    // return the total trip
    return totalTrip;
  }






