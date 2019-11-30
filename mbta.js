
const stations01 = {

  red: [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife']
  ,

  green: [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore',
  ]

  ,

  orange: [
    'North Station',
    'Haymarket',
    'Park Street',
    'State',
    'Downtown Crossing',
    'Chinatown',
    'Back Bay',
    'Forest Hills',
  ],

  stopsBetweenStations: function (startLine, startStation, endLine, endStation) {
    //  if (startLine !== endLine){}
    var strStation = this[startLine].indexOf(startStation);
    var enStation = this[endLine].indexOf(endStation);
    let br1 = this[startLine].indexOf("Park Street");
    let br2 = this[endLine].indexOf("Park Street");
    let firstStop = 0;
    let secondStop =0;

    if(startLine == endLine) {
      result = Math.abs(strStation - enStation);
    } else if (startLine != endLine) {
        firstStop = Math.abs(strStation - br1);
        firstStop = Math.abs(enStation - br2) + firstStop;

    }
      return result;
  },


}

stations01.stopsBetweenStations("green", 'Copley', "orange", 'Chinatown');
