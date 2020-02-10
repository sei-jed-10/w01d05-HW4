[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JS Object Modeling

## Objectives

- Practice with functions, arrays, and objects.

## Instructions

1. Fork and clone this repository.
1. Create and checkout to a new branch, named `homework`.
1. When finished, add, commit and push to your fork to submit a pull request.

## Activity

- Create a file named `mbta.js` to calculate the number of stops between
  stations on the "MBTA". Write additional functions used by this function as
  needed.
- The function takes the line and stop that a rider is getting on at and the
  line and stop that a rider is getting off at and **returns the total number of
  stops for the trip**.

There are 3 subway lines:

- Red
  - South Station
  - Park Street
  - Kendall
  - Central
  - Harvard
  - Porter
  - Davis
  - Alewife
- Green 
  - Government Center
  - Park Street
  - Boylston
  - Arlington
  - Copley
  - Hynes
  - Kenmore
- Orange 
  - North Station
  - Haymarket
  - Park Street
  - State
  - Downtown Crossing
  - Chinatown
  - Back Bay
  - Forest Hills
- All 3 subway lines intersect at *Park Street*, but there are no other intersection points. 

The function will be invoked using the following pattern of arguments:

`Start Line`, `Start Station`, `End Line`, `End Station`

Here are some examples of how should be invoked.

```js
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops
```

## Hints

- Consider diagramming the lines by sketching out the subway lines and their
  stops and intersection.
- Solve an easier problem first like only traveling on the Red line.
- Assume good input.  Your function does not need to check the validity of the line or
  stop.
- Subway lines are keys in a dictionary (object literal), while the values are
  a list (array) of all the stops on each line.
- The key to the practice is to find the **intersection** of the lines at
  *Park Street*.


## Bonus

- Add validation so that the function only accepts Red, Green, and Orange for lines and only accepts the correct stops for each of their stops.
- Have the function print the line and stops as they ride the train.
- Example:
```js
stopsBetweenStations('Red', 'South Station', 'Green', 'Copley') 

// Rider boards the train a Red Line and South Station.
// Rider arrives at Red Line and Park Street.
// Rider transfers from Red Line to Green Line at Park Street.
// Rider arrives at Green Line and Boylston.
// Rider arrives at Green Line and Arlington.
// Rider arrives at Green Line and Copley.
// Rider exits the train at Green Line and Copley.



let subway_lines = {
  'Red' : ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis','Alewife'],
  
  'Green' : ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
  
  'Orange': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};
 

function stopsBetweenStations(StartLine, StartStation, EndLine, EndStation) {
  // validate
  if (isValidLine(StartLine) && isValidLine(EndLine) 
      && isValidStation(StartLine, StartStation) 
      && isValidStation(EndLine, EndStation)) {
        
    let stops = 0, direction = 0;
    if (StartStation == EndStation)
      return stops;
    while (StartStation != EndStation) {
      if (StartLine == EndLine) {
        if (subway_lines[StartLine].indexOf(StartStation) < subway_lines[EndLine].indexOf(EndStation))
          direction = 1;
        else
          direction = -1;
        
        StartStation = newStop(StartLine, subway_lines[StartLine].indexOf(StartStation) + direction); 
      }
      else if (StartStation == 'Park Street') {
        StartLine = EndLine;
        if (subway_lines[StartLine].indexOf(StartStation) < subway_lines[EndLine].indexOf(EndStation))
          direction = 1;
        else
          direction = -1;
        
        StartStation = newStop(StartLine, subway_lines[StartLine].indexOf(StartStation) + direction);
      }
      else {
        if (subway_lines[StartLine].indexOf(StartStation) < subway_lines[EndLine].indexOf('Park Street'))
          direction = 1;
        else
          direction = -1;
        
        StartStation = newStop(StartLine, subway_lines[StartLine].indexOf(StartStation) + direction);
      }
      stops++;
    }
    return stops;
  }
}

function isValidLine(line) {
    return line in subway_lines;
}

function isValidStation(line, station) {
  return true;
  return result;
}

function newStop(line, index) {
  let list = subway_lines[line];
  return list[index]
}

console.log (stopsBetweenStations('Red', 'South Station', 'Green', 'Copley') + ' Stops')
 
console.log (stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')+ ' Stops') // 0 stops
console.log (stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')+ ' Stops') // 7 stops
console.log (stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')) // 6 stops


```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
