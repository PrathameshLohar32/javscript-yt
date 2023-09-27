let score="33"
console.log(Number(score)) //pure number represented as string can be converted to number.

let sc="33aa" // this is also converted but shows NaN after print

let isloggedIN = 1;
let boolconversion = Boolean(isloggedIN)
console.log(isloggedIN)
// "33" => 33
// "33aa" => NaN
// true => 1, false=>0
// "" => false,  "ahxva" => true
let num= "34365";
let convtoString = String(num);
console.log(convtoString)

// Basic math operators are same like other langs +,-,/,*,%,etc

//let us see some confusing conversions
let str="hello"
let str1= " pkl"
console.log(str+str1)

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

//if string is first then others will automatically converted to string
//if string is at last then other operations execute first then at last converted to string