// String
const str1 = String(true); // true
console.log(str1);

const str2 = String(1000); // 1000
console.log(str2);

const str3 = String(null); // null
console.log(str3);

const str4 = String(undefined); // undefined
console.log(str4);

// Number
const num1 = +"123a"; // Nan
console.log(num1);

const num2 = +'1000'; // 1000
console.log(num2);

const num3 = Number(null); // 0
console.log(num3);

const num4 = Number(undefined); // Nan
console.log(num4);

const num5 = Number(false); // 0
console.log(num5);

// Boolean 
const isBoolean_1 = Boolean(null); // false
console.log(isBoolean_1);

const isBoolean_2 = Boolean(undefined); // false
console.log(isBoolean_2);

const isBoolean_3 = Boolean(""); // false
console.log(isBoolean_3);

const isBoolean_4 = Boolean(0); // false
console.log(isBoolean_4);

const isBoolean_5 = Boolean(" "); // true
console.log(isBoolean_5);

const isBoolean_6 = Boolean(1000); // true
console.log(isBoolean_6);

const isBoolean_7 = Boolean("1200"); // true
console.log(isBoolean_7);
