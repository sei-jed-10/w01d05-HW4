function stopsBetweenStations (startLine, startStation, endLine, endStation){

    const subway = [
      { line: 'Red',
      stations: ['South Station',
                 'Park Street',
                 'Kendall',
                 'Central',
                 'Harvard',
                 'Porter',
                 'Davis',
                 'Alewife'] },
      { line: 'Green',
      stations: ['Government Center',
                 'Park Street',
                 'Boylston',
                 'Arlington',
                 'Copley',
                 'Hynes',
                 'Kenmore'] },
      { line: 'Orange',
      stations: ['North Station',
                 'Haymarket',
                 'Park Street',
                 'State',
                 'Downtown Crossing',
                 'Chinatown',
                 'Back Bay',
                 'Forest Hills'] }
    ];
      
      var indIntersect = 0;
      var local = {};
      var journey = {};
      
      for (let i = 0; i < subway.length; i ++) {
    // to check the journey line.
        if (startLine == endLine) {
        return indexOf(subway[i].stations + subway[i].stations)
      }
        for (let l = 0; l < subway[i].line.length; l ++) {
    // to check the start and end of journey.
          for (let s = 0; s < subway[i].stations.length; s ++) {
    // to count the stops.        
            if (startStation == subway[i].stations[s] && journey[startStation] == undefined)
            {journey[startStation] = 1};
            if (endStation == subway[i].stations[s] && journey[endStation] == undefined)
            {journey[endStation] = 1};
              for (let j = 0; j < journey.length; j ++) {
    // to count local journey (at same line).
              if (startLine == endLine) {local[journey]}
            };
            return local
          };
        };
        if (journey[startStation] == journey[endStation])
          {indIntersect = journey.startStation + journey.endStation};
      };
     if (startLine != 'Red' && startLine != 'Green' && startLine != 'Orange'
         || endLine != 'Red' && endLine != 'Green' && endLine != 'Orange') {
        console.log ('wrong line entry, please try again: Red, Green, or Orange.') };
    //   if not same 
    };
    
    
    console.log(stopsBetweenStations('Red', 'South Station', 'Red', 'Alewife'))
    // 0 stops
    console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'))
    // 7 stops
    console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'))
    // 6 stops 
    console.log(stopsBetweenStations('not', 'not', 'not', 'not'))
    // wrong line entry, please try again: Red, Green, or Orange.