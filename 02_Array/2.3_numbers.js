#!/usr/bin/node

var numbers= [0,1,2,3,4,5,6,7,8,9];

console.log(numbers);

console.log("attach one element by numbers.length");
numbers[numbers.length] = 10;
console.log(numbers);

console.log("push one element");
numbers.push(11);
console.log(numbers);

console.log("push two elements");
numbers.push(12,13);
console.log(numbers);

console.log("------- put fist element -------");
for (var i = numbers.length; i>=0; i--)
{
	numbers[i] = numbers[i - 1];
}
numbers[0] = -1;
console.log(numbers);

console.log("------ unshift one element ------");
numbers.unshift(-2);
console.log(numbers);

console.log("------ unshift two elements -----");
numbers.unshift(-4, -3);
console.log(numbers);

