#!/usr/bin/node

var num=1

console.log('typeof num:' , typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]', typeof [1,2,3]);
console.log('typeof {name:John}:', typeof {name:'John'});

console.log('--------------------\n');

var myObj = {name: 'John', age: 21};
console.log('before delete : ' , myObj);
delete myObj.age;
console.log('after delete : ', myObj);

console.log('--------------------\n');

function testTruthy(val)
{
	return val ? console.log('true') : console.log('false');
}


console.log(1);
testTruthy(true);
console.log(2);
testTruthy(false);
console.log(3);
testTruthy(new Boolean(false));
console.log(4);
testTruthy('');
console.log(5);
testTruthy('Packt');
console.log(6);
testTruthy(new String(''));
console.log(7);
testTruthy(1);
console.log(8);
testTruthy(-1);
console.log(9);
testTruthy(NaN);
console.log(10);
testTruthy(new Number(NaN));
console.log(11);
testTruthy({});

var obj = {name:'John'};
testTruthy(obj);
testTruthy(obj.name);
testTruthy(obj.age);
