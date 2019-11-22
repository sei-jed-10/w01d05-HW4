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

  loopStops: function(line, from, to, reverse = false) {
    let arr = line.slice(from, to);
    let iterator = arr.values();
    if (reverse) arr = arr.reverse();
    for (let lines of iterator) {
      console.log("Rider arrives at " + lines);
    }
  },

  printLines: function(line1, from, line2, to, multiZones) {
    let fromIndex = line1.indexOf(from);
    let toIndex = line2.indexOf(to);
    console.log("Rider boards the train at " + from + ".");

    if (!multiZones) {
      if (fromIndex < toIndex) {
        this.loopStops(line1, fromIndex, toIndex + 1);
      } else {
        this.loopStops(line1, toIndex, fromIndex + 1, true);
      }
    } else {
      let intersectedStop = "Park Street";
      let line1IntersectedStop = line1.indexOf(intersectedStop);
      let line2IntersectedStop = line2.indexOf(intersectedStop);

      if (fromIndex < line1IntersectedStop) {
        this.loopStops(line1, fromIndex + 1, line1IntersectedStop + 1);
      } else {
        this.loopStops(line1, line1IntersectedStop, fromIndex, true);
      }

      console.log("Rider transfers lines at Park Street.");

      if (line2IntersectedStop < toIndex) {
        this.loopStops(line2, line2IntersectedStop + 1, toIndex + 1);
      } else {
        this.loopStops(line2, toIndex, line2IntersectedStop, true);
      }
    }
    console.log("Rider exits the train at " + to + ".");
  },

  stopsBetweenStations: function(line1, from, line2, to) {
    let numStops = 0;
    if (
      this[line1.toLowerCase()] != undefined &&
      this[line2.toLowerCase()] != undefined
    ) {
      if (line1 == line2) {
        numStops = this.stopCounter(from, to, this[line1.toLowerCase()]);
        this.printLines(
          this[line1.toLowerCase()],
          from,
          this[line2.toLowerCase()],
          to,
          false
        );
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
        this.printLines(
          this[line1.toLowerCase()],
          from,
          this[line2.toLowerCase()],
          to,
          true
        );
      }
    } else {
      numStops = "wrong lines input!";
    }
    return numStops;
  }
};
subway.stopsBetweenStations("Red", "Alewife", "Green", "Government Center");
