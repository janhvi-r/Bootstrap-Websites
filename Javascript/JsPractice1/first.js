//Arithmatic operaters
let a = 5;
let b = 2;
console.log("a = 5 , b = 2");
console.log("a + b=", a + b);
console.log("a - b=", a - b);
console.log("a * b=", a * b);
console.log("a / b=", a / b);

// example of Modulus
//given the reminder (Baki)
//console.log("a % b=", a % b);

//example of exponentiation
console.log("a ** b=", a ** b);

//Unary Operator
// example of Increment
//a = 5;
//b = 2;
// a = a + 1;
//a++;
//console.log("a =", a++);

//example of Decrement
//a = a - 1;
/* a--;
console.log("a =", a--)*/
b = 2;
console.log("--b =", --b);
console.log("++a =", ++a);


//Assignment Operator
x = 5;
y = 2;
x **= 4;
console.log("x=", x);
x -= 5,
    console.log("x=", x);



//comparison  Operator
m = 6; // number 
n = "6"; // string 
o = 2;
console.log("6 != 6", m != n);
console.log("m == n", m == n);
console.log("m === n", m === n); //strictly checked data type
console.log("m !== n", m !== n);
console.log("6 > 2", m > o);
console.log("6 <= 2", m <= o);


//Logical Operators
j = 2;
s = 5;

let cond1 = s > j;
let cond2 = s === 5;
console.log("cond1 && cond2 ", cond1 && cond2); //AND
console.log("cond1 ||", j > s || j === 2); //OR
console.log("!(5<2)", !(s < j)); //NOT false
console.log("!(j == 2)", !(s === 5)); //NOT true

//Conditional Statement
//If Statement
let age = 25;
if (age >= 18) {
    console.log("you can vote");
}

let mode = "dark"; //else if also worked
let color;
if (mode === "dark") {
    color = "Black";
}
if (mode === "Light") {
    color = "White ";
}
console.log(color);

//If Else Statement
let Mode = "blue"
if (Mode === "dark") {
    color = "black"
} else {
    color = "pink"
}
console.log(color);

let marks = 50;
let result;
if (marks >= 35) {
    result = "Pass"
} else {
    result = "fail"
}
console.log(result);

let Age = 25;
if (Age <= 18) {
    console.log("Vote")
} else {
    console.log("Not Vote")
}
let Num = 10;
if (Num % 2 === 0) {
    console.log(Num, "is Even")
} else {
    console.log(Num, "is Odd")
}
//else if statement

if (mode === "dark") {
    console.log("black")
} else if (mode === "blue") {
    console.log("blue")
} else if (mode === "pink") {
    console.log("pink")
} else {
    console.log("white")
}
if (mode === "dark") console.log(mode);

//Ternary Operators
let boy = 25;
let Result = boy >= 18 ? "adult" : "Not adult";
console.log(Result);


let girl = 15;
let fresher = girl >= 15 ? "Smart" : "Happy";
console.log(fresher);