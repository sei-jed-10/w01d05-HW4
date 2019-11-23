
let stops = 0;
const subwayLines = {
    // red line
    red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    // green line
    green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    // orange line 
    orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills'],

  stopsBetweenStations: function(startLine, startStation, endLine, endStation){
    if(startLine === endLine){
      if(startStation === endStation){
        stops = 0;
        console.log(`Number of Stops are: ${stops} Stops`);

      }else{
        const stopsStart = (subwayLines[startLine.toLowerCase()]).indexOf(startStation);
        const stopsEnd = (subwayLines[startLine.toLowerCase()]).indexOf(endStation);

        stops = Math.abs(stopsStart - stopsEnd);
        console.log(`Number of Stops are: ${stops} Stops`);
      }
    }else if(startLine != endLine){
      const stopsStart = (subwayLines[startLine.toLowerCase()]).indexOf(startStation);
      const stopsEnd = (subwayLines[endLine.toLowerCase()]).indexOf(endStation);
      
      stops = Math.abs(stopsStart - stopsEnd);
      console.log(`Number of Stops are: ${stops} Stops`);
    }
  },
};
subwayLines.stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife'); // 0 stops
subwayLines.stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'); // 7 stops
subwayLines.stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops

