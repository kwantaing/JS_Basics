//for loops
//starting position, end scenario, increment(i++. i--. i+=2, etc.)
var numarray = [];
for (let a = 2; a <= 10; a += 2) {
	numarray.push(a);
}
console.log(numarray);

for (let i = 0; i < numarray.length; i++) {
	console.log(numarray[i]);
}

//while loop

let b = 0;

while (b != 5) {
	//will keep running until this condition is true
	console.log(b);
	b++; //need increment or change to have end the loop at some point
}

const numArray = [1, 2, 3, 4, 5];
console.log(numArray);
//map function: for each value in this array, do something
const sqrArray = numArray.map((num) => num * num); //for each value, square it
console.log(sqrArray);
const Add2Array = numArray.map((num) => {
	//add 2 to each value
	return (num += 2);
});
console.log(Add2Array);

//modulo operator : %  -- returns the remainder: 5%2 will return 1, because 5/2 is 2 remainder 1
//filter function: fiters an array based on some condition that is true
const odds = numArray.filter((num) => num % 2 != 0);
const evens = numArray.filter((num) => {
	return num % 2 === 0;
});
console.log(odds);
console.log(evens);

//we will use these 2 functions quite often, especially map function.
