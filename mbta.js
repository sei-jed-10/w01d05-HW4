const subway = {
  red: [
    "South Station",
    "Park Street",
    "Kendall",
    "Central",
    "Harvard",
    "Porter",
    "Davis",
    "Alewife"
  ],
  green: [
    "Government Center",
    "Park Street",
    "Boylston",
    "Arlington",
    "Copley",
    "Hynes",
    "Kenmore"
  ],
  orange: [
    "North Station",
    "Haymarket",
    "Park Street",
    "State",
    "Downtown Crossing",
    "Chinatown",
    "Back Bay",
    "Forest Hills"
  ],

  stopCounter: function(from, to, line) {
    return Math.abs(line.indexOf(from) - line.indexOf(to));
  },

  loopThroughStops: function(line, from, to, reverse = false) {
    let arr = this[line.toLowerCase()].slice(from, to);
    let iterator = arr.values();
    if (reverse) arr = arr.reverse();
    for (let lines of iterator) {
      console.log(`Rider arrives at ${line} Line and ${lines}`);
    }
  },

  printLines: function(line1, from, line2, to, multiZones) {
    let fromIndex = this[line1.toLowerCase()].indexOf(from);
    let toIndex = this[line2.toLowerCase()].indexOf(to);
    console.log(`Rider boards the train at ${line1} Line and ${from}.`);

    if (!multiZones) {
      if (fromIndex < toIndex) {
        this.loopThroughStops(line1, fromIndex, toIndex + 1);
      } else {
        this.loopThroughStops(line1, toIndex, fromIndex + 1, true);
      }
    } else {
      let intersectedStop = "Park Street";
      let line1IntersectedStop = this[line1.toLowerCase()].indexOf(
        intersectedStop
      );
      let line2IntersectedStop = this[line2.toLowerCase()].indexOf(
        intersectedStop
      );

      if (fromIndex < line1IntersectedStop) {
        this.loopThroughStops(line1, fromIndex + 1, line1IntersectedStop + 1);
      } else {
        this.loopThroughStops(line1, line1IntersectedStop, fromIndex, true);
      }

      console.log(
        `Rider transfers from ${line1} Line to ${line2} Line at Park Street.`
      );

      if (line2IntersectedStop < toIndex) {
        this.loopThroughStops(line2, line2IntersectedStop + 1, toIndex + 1);
      } else {
        this.loopThroughStops(line2, toIndex, line2IntersectedStop, true);
      }
    }
    console.log(`Rider exits the train at ${to} .`);
  },

  stopsBetweenStations: function(line1, from, line2, to) {
    let numStops = 0;
    if (
      this[line1.toLowerCase()] != undefined &&
      this[line2.toLowerCase()] != undefined &&
      this[line1.toLowerCase()].includes(from) &&
      this[line2.toLowerCase()].includes(to)
    ) {
      if (line1 == line2) {
        numStops = this.stopCounter(from, to, this[line1.toLowerCase()]);
        numStops += " Stops";
        this.printLines(line1, from, line2, to, false);
      } else {
        let intersectedStop = "Park Street";
        numStops = this.stopCounter(
          from,
          intersectedStop,
          this[line1.toLowerCase()]
        );
        numStops += this.stopCounter(
          intersectedStop,
          to,
          this[line2.toLowerCase()]
        );
        numStops += " Stops";
        this.printLines(line1, from, line2, to, true);
      }
    } else {
      numStops = "wrong lines input!";
    }
    console.log(`${numStops}`);
  }
};
subway.stopsBetweenStations("Red", "South Station", "Green", "Copley");
