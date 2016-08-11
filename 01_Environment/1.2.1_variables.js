#!/usr/bin/node

var num = 1;
num = 3;
var price = 1.5;
var name = 'Packt';
var trueValue = true;
var nullVar = null;
var und;

console.log("num:" + num);
console.log("name:" + name);
console.log("trueValue:" + trueValue);
console.log("price:" + price);
console.log("nullVar:" + nullVar);
console.log("und:" + und);

console.log("----------------------------");

var myVariable = 'myVariable global'; 			// global variable
var myOtherVariable = 'myOtherVariable global';		// global variable

function myFunction() 
{
	var myVariable = 'myFunction myVariable';	// local variable
	return myVariable;
}

function myOtherFunction()
{

	myOtherVariable = 'myOtherFunction myOtherVariable'; // direct assign myOtherVariable with new value
	return myOtherVariable;
}


console.log(myVariable);
console.log(myFunction());
console.log(myVariable);
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);
