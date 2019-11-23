//Solution

const subwayLines =
{

  
  
    red:["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"],
  

  

    green:["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"],
  
  
  

    orange:["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"],
  

}


function distance(startLine,station1,endLine,station2)
     {
        let dist = 0;
        
               
          if(startLine == endLine)
          {
              if((startLine == "red" || endLine == "red") || (startLine == "green" || endLine == "green") || (startLine == "orange" || endLine == "orange"))

              {
        
                  dist = Math.abs(subwayLines[startLine].indexOf(station1) - subwayLines[endLine].indexOf(station2))

              }
                  return dist;
            }
          else if (startLine != endLine)
          {
                console.log("You are on a different line.")

                if(station1 == "Park Street")
                  //gonna use different line
              {
                if(startLine == "red" && endLine == "green" || startLine == "green" && endLine == "red")
                            
                    {
                  
                      dist = Math.abs(subwayLines.red.indexOf(station1) - subwayLines.green.indexOf(station2))
                      return dist;

                    }
                else if(startLine == "red" && endLine == "orange" || startLine == "orange" && endLine == "red")

                    {
                      
                      dist = Math.abs(subwayLines.red.indexOf(station1) - subwayLines.orange.indexOf(station2))
                      return dist;

                    }

                else if (startLine == "orange" && endLine == "green" || startLine == "green" && endLine == "orange")

                    {
                      dist = Math.abs(subwayLines.orange.indexOf(station1) - subwayLines.green.indexOf(station2))
                      return dist;

                    } 
                    
                }
                else
                {
                  dist = Math.abs(subwayLines[startLine].indexOf(station1) - subwayLines[endLine].indexOf(station2))
                  return dist;

                }
                            
                      
                        
            }
      
      }

        
    
  
  console.log(distance("red","Park Street","orange","Chinatown") + " stops.")
  console.log(distance('red', 'Alewife', 'red', 'Alewife')+ " stops") //0
  console.log(distance('red', 'Alewife', 'red', 'South Station') +" stops") // 7 stops
  console.log(distance('red', 'South Station', 'green', 'Kenmore') +" stops") // 6 stops
  