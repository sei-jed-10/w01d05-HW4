


const subwayLines =
{
  Red: ["south Station", "Park Street", "Kendall", "Central", "porter", "Davis", "Alewife"] ,
  Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"] ,
  Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"],

 stopsLoop: function(arr)
 { var stops =- 1;
    for (let lines of arr)
   {
      stops++;
   }var subwayLines =
{
  Red: ["south Station", "Park Street", "Kendall", "Central", "porter", "Davis", "Alewife"] ,
  Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"] ,
  Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"] ,

 Stops_loop: function(arr)
 { var stops =- 1;
    for (let lines of arr)
   {
      stops++;
   }
   return stops;
 }

 stopsBetweenStations : function (startLine, startStation, endLine, endStation)
  {
    if((startLine || endLine) !== ("Red"||"Green"||"Orange"))
    {
    console.log("")
    }
    else
    {
    var stops=0;
    var interSection_Index_1 = this[startLine].indexOf("Park Street");
    var interSection_Index_2 = this[endLine].indexOf("Park Street");
    var startStation_Index = this[startLine].indexOf(startStation);
    var endStation_Index = this[endLine].indexOf(endStation);

    if (startLine === endLine)
    {
      if(startStation === endStation)
      {
        console.log("Rider boards the train a " + startStation + " Station and end up in the same station .");
        return "Num of stops = " + stops;
      }
      else if (startStation_Index<endStation_Index)
     {
       console.log("Rider boards the train a " + startLine + " Line and " + startStation + ".")
        let arr = this[startLine].slice(startStation_Index , endStation_Index + 1);
        console.log(arr);
        var num = this.Stops_loop(arr);
        console.log("Rider exits the train at " + endLine + " Line and" + endStation + " .");
        return "Num of stops = " + num;
      }
      else if (startStation_Index > endStation_Index)
     {
       console.log("Rider boards the train a " + startLine + " Line and " + startStation + ".")
        let arr = this[startLine].slice(endStation_Index ,  startStation_Index + 1);
        console.log(arr);
        var num = this.Stops_loop(arr);
        console.log('Rider exits the train at " + endLine + " Line and " + endStation + " .");
        return "Num of stops = " + num;
      }
    }
   else
    {
     console.log("Rider boards the train a " + startLine + "Line and " + startStation + ".")
     let arr1 = this[startLine].slice(startStation_Index, Intersection_Index_1 + 1);
     let arr2 = this[endLine].slice(Intersection_Index_2, endStation_Index + 1);
     var num1=this.Stops_loop(arr1);
     console.log("Rider transfers from " + startLine + " Line to " + endLine +"Line at Park Street. ");
     var num2=this.Stops_loop(arr2);
     var num=num1+num2;
     console.log("Rider exits the train at " + endLine +  Line and "+ endStation + " .");
     return "Num of stops = " + num;
    }
  }
};
   return stops;
 }

 stopsBetweenStations : function (startLine, startStation, endLine, endStation)
  {
    if((startLine || endLine) !== ("Red"||"Green"||"Orange"))
    {
    console.log("")
    }
    else
    {
    var stops=0;
    var interSection_Index_1 = this[startLine].indexOf("Park Street");
    var interSection_Index_2 = this[endLine].indexOf("Park Street");
    var startStation_Index = this[startLine].indexOf(startStation);
    var endStation_Index = this[endLine].indexOf(endStation);

    if (startLine === endLine)
    {
      if(startStation === endStation)
      
    }
  }
};