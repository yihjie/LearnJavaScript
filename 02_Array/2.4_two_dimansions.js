#!/usr/bin/node 
// Record the tempature everyday in each array
var averageTempDay1 = [72,75,79,79,81,81];
var averageTempDay2 = [81,79,75,75,73,72];
console.log(averageTempDay1);
console.log(averageTempDay2);

console.log("--------------------------");

var averageTemp = [];
averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,72];
console.log(averageTemp);

console.log("--------------------------");

//day 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 75;
averageTemp[0][3] = 79;
averageTemp[0][4] = 79;
averageTemp[0][5] = 81;
averageTemp[0][6] = 81;

//day 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;

printMatrix(averageTemp);

function printMatrix(myMatrix)
{
	for (var i = 0; i < myMatrix.length; i++)
	{
		for (var j = 0; j < myMatrix[i].length; j++)
		{
			console.log(myMatrix[i][j]);
		}
	}
}
