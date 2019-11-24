//// not finished /////

//i ll create function takes the line and stop that a rider is getting on and off and returns the total number of stops for the trip.//

// then I ll make array of object.. 3 keys: Red, Green, Orange.. each key has all stops as values. 
  
// then I ll make For loop then sum and log
  

const subwayLines = {  
    red:["south station", "park street", "kendall", "central", "harvard", "davis", "alewife"],

    green:["government center", "park street", "boylston", "arlington", "copley", "hynes", "kenmore"],

    orange:["north station", "haymarket", "park street", "state", "downtown crossing", "china town", "back bay", "forest hills"]}

var startLine = ["red", "green", "orange"];
var startStation = ["south station", "government center", "north station"];
var endLine = startLine;
var endStation = ["alewife", "kenmore", "forest hills"];

function stopsBetweenStations(startLine, startStation, endLine, endStation){
   var totalStops = 0;
   
     for (i = 0 ; i < subwayLines["orange"].length; i++){
       if (i < subwayLines[i]){
       return(totalStops + " stops")
       }
       totalStops++; 
   } 
  console.log(totalStops + " stops")
 }

stopsBetweenStations("red", "alewife", "red", "alewife") // 0 stops
stopsBetweenStations("red", "alewife", "red", "south station") // 7 stops
stopsBetweenStations("red", "south station", "green", "kenmore") // 6 stops

//      this.startLine = startLine;
//      this.startStation = startStation;
//      this.endLine = endLine;
//      this.endStation = endStation;
  
//      this.calStops: function(){
//      let totalStops = this.startStation + this.endStation;
//      console.log(totalStops)
  
//      this.riderBoards = function(){
//        console.log("Rider boards the train a "+ this.startLine + " Line and " + this.startStation)
//      }

//      this.riderArrive = function(){
//        console.log("Rider arrives at the train a "+ this.startLine + " Line and " + this.startStation)
//      }
//   }
//   let rider1 = new stopsBetweenStations("red", "south station", "green", "copley") 
// rider1.riderBoards()

//   let rider2 = new stopsBetweenStations("red", "Park Street", "green", "copley") 
// rider2.riderArrive()
