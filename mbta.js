

var red = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']
var green = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmmore']
var orange = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatwon', 'Back Bay', 'Forrest Hills']

var numOfStops;

var startLine;
var endLine;
var startStation;
var endStation;

function stops (startLine, startStation, endLine, endStation)
{
	if (startLine === endLine)
	{
		numOfStops = Math.abs((startLine.indexOf(startStation))-(startLine.indexOf(endStation)))
	}
	if (startLine !== endLine)
	{
		numOfStops = Math.abs((startLine.indexOf(startStation))-(startLine.indexOf('Park Street'))) + Math.abs((endLine.indexOf('Park Street')) - (endLine.indexOf(endStation)))
	}
}

stops(red, 'Alewife', red, 'South Station')
console.log(numOfStops)