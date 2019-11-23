
var Subway_Lines =
{
  Red: [ 'South Station' , 'Park Street' , 'Kendall' , 'Central' , 'Harvard' , 'Porter' , 'Davis' , 'Alewife'] ,
  Green: [ 'Government Center' , 'Park Street' , 'Boylston' , 'Arlington' , 'Copley' , 'Hynes' , 'Kenmore'] ,
  Orange: [ 'North Station' , 'Haymarket' , 'Park Street' , 'State' , 'Downtown Crossing' , 'Chinatown' , 'Back Bay' , 'Forest Hills'] ,

 Stops_loop: function(arr)
 { var Stops=-1;
    for (let lines of arr)
   {
     //console.log("Rider arrives at " + lines); // Bonus but there are something wrong
      Stops++;
   }
   return Stops;
 } ,

 stopsBetweenStations : function (Start_Line,Start_Station, End_Line, End_Station)
  {
    if((Start_Line||End_Line)!==('Red'||'Green'||'Orange')) //Bonus
    {
    console.log('You must choose an exist line')
    }
    else
    {
    var Stops=0;
    var Intersection_Index_1=this[Start_Line].indexOf('Park Street');
    var Intersection_Index_2=this[End_Line].indexOf('Park Street');
    var Start_Station_Index=this[Start_Line].indexOf(Start_Station);
    var End_Station_Index=this[End_Line].indexOf(End_Station);

    if (Start_Line == End_Line)
    {
      if(Start_Station==End_Station)
      {
        console.log('Rider boards the train a '+Start_Station+' Station and end up in the same station .');
        return 'Number of stops = '+Stops;
      }
      else if (Start_Station_Index<End_Station_Index)
     {
       console.log('Rider boards the train a '+Start_Line+' Line and '+Start_Station+'.')
        let arr = this[Start_Line].slice(Start_Station_Index , End_Station_Index + 1);
        console.log(arr);
        var num=this.Stops_loop(arr);
        console.log('Rider exits the train at '+End_Line +' Line and '+End_Station+' .');
        return 'Number of stops = '+num;
      }
      else if (Start_Station_Index>End_Station_Index)
     {
       console.log('Rider boards the train a '+Start_Line+' Line and '+Start_Station+'.')
        let arr = this[Start_Line].slice( End_Station_Index ,  Start_Station_Index + 1);
        console.log(arr);
        var num=this.Stops_loop(arr);
        console.log('Rider exits the train at '+End_Line +' Line and '+End_Station+' .');
        return 'Number of stops = '+num;
      }
    }
   else
    {
     console.log('Rider boards the train a '+Start_Line+' Line and '+Start_Station+'.')
     let arr1 = this[Start_Line].slice(Start_Station_Index , Intersection_Index_1 + 1);
     let arr2 = this[End_Line].slice(Intersection_Index_2 , End_Station_Index + 1);
     var num1=this.Stops_loop(arr1);
     console.log('Rider transfers from '+Start_Line+' Line to '+End_Line+' Line at Park Street. ');
     var num2=this.Stops_loop(arr2);
     var num=num1+num2;
     console.log('Rider exits the train at '+End_Line +' Line and '+End_Station+' .');
     return 'Number of stops = '+num;
    }
  }
  }
};


Subway_Lines.stopsBetweenStations('Red','South Station', 'Red',  'Central') ;// 3 stops
//Subway_Lines.stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
//Subway_Lines.stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
//Subway_Lines.stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops
//Subway_Lines.stopsBetweenStations('Red', 'South Station', 'Green', 'Copley') // 4 stops
//Subway_Lines.stopsBetweenStations('Blue', 'South Station', 'Green', 'Copley')//You must choose an exist line
