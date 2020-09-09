const a = 5;  // constant variable, cant be changed
let b = 10;   //same as var, can be changed

b = 100;
//a = 20    this will give typeError was trying to change constant

const newDict = {   //you can however change the properties of an const object
    name : 'Bill',
    color: 'blue',
}

// console.log(a,b);

console.log(newDict);

newDict.age = '35';  //you can even add properties to it

console.log(newDict);