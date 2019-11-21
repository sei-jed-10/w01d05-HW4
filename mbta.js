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

  loopStops: function(iterator) {
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
        let arr = line1.slice(fromIndex, toIndex + 1);
        let iterator = arr.values();
        for (let lines of iterator) {
          console.log(lines);
        }
      } else {
        let arr = line1.slice(toIndex, fromIndex + 1);
        arr = arr.reverse();
        let iterator = arr.values();
        this.loopStops(iterator);
      }
    } else {
      let intersectedStop = "Park Street";
      let line1IntersectedStop = line1.indexOf(intersectedStop);
      let line2IntersectedStop = line2.indexOf(intersectedStop);

      if (fromIndex < line1IntersectedStop) {
        let arr = line1.slice(fromIndex, line1IntersectedStop + 1);
        let iterator = arr.values();
        this.loopStops(iterator);
      } else {
        let arr = line1.slice(line1IntersectedStop, fromIndex + 1);
        arr = arr.reverse();
        let iterator = arr.values();
        this.loopStops(iterator);
      }

      console.log("Rider transfers lines at Park Street.");

      if (line2IntersectedStop < toIndex) {
        let arr = line2.slice(line2IntersectedStop + 1, toIndex + 1);
        let iterator = arr.values();
        this.loopStops(iterator);
      } else {
        let arr = line2.slice(toIndex, line2IntersectedStop);
        arr = arr.reverse();
        let iterator = arr.values();
        this.loopStops(iterator);
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
subway.stopsBetweenStations("Red", "South Station", "Green", "Copley");
