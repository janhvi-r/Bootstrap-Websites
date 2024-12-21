// //Arrays----->

// //let marks = [90, 82, 75, 63, 41, 36];
// //marks[0] = 45;
// //marks[2];
// //console.log(marks);
// //console.log(marks[2]);



// //let Gods = ["Bramha", "Vishnu", "Mahesh"];
// // console.log(Gods);



// //looping over an array
// let Devi = ["Mahalakshmi", "Sarswati", "Mahakali", "Hingulambika", "Saptshrungi", "RenukaMata", "Rajrajeshwari"];
// for (let i = 0; i < Devi.length; i++) {
//     console.log(Devi[i]);

// }
// //i used FOR OF LOOP in array
// let sisters = ["Yogita", "Pooja", "Jaya"];
// for (let sis of sisters) {
//     console.log(sis.toUpperCase());
// }

// let cities = ["Hyderabad", "Mumbai", "Delhi", "Gujrat", "Pune"];
// for (let city of cities) {
//     console.log(city.toUpperCase());
// }


// //Question---->
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// console.log(sum);

//Avarage Example

let mar = [34, 34, 66, 78, 89, 60];
let total = 0;
for (let m of mar) {
    total += m;
}
let avg = total / mar.length;
console.log(total);
console.log(avg);


//let number = [2, 2, 1, 3, 4, 5];
//let sum = 0;
//for (let num of number) {
//   sum += num;
//}
//console.log(sum);
//let avg1 = sum / number.length;
//console.log(avg1);





let num = [56, 46, 32, 78, 99, 34];
let add = 0;
for (number of num) {
    add += number;
}
console.log(add);
let average = add / num.length;
console.log(average);



let Sister = [23, 42, 56, 78, 90, 58, 100, 34];
let addition = 0;
for (sis of Sister) {
    addition += sis
}
console.log(addition);
let Avg = addition / Sister.length;
console.log(Avg);

let items = [250, 645, 400, 300, 900, 50];
items.push(1000);

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);

let sister = ["yogita", "pooja"]
let brother = ["santosh", "suraj"];
brother.push("Satish", "Nitin", "Nilesh");
brother.pop();
sister.unshift("jaya");
brother.shift();
sister.concat(brother);
console.log(sister);
console.log(sister.toString());
let chilli = ["Green", "red", "Yellow", "orange"]
    //chilli.splice(1, 2, 101, 102) //startIdx ,DeleteIdx,Add number
    //chilli.splice(0, 0, 202) //Add element
    //chilli.splice(1, 2) //Delete element
chilli.splice(2, 1, 111) //replace element


//Practice Question
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
    //companies.shift();//Remove first comp name
    //companies.splice(2, 1, "Ola")//Remove and add
companies.push("Amazon")



function myFunction() {
    console.log("welcome to the my new home");
    console.log("Enjoy every moment");

}
myFunction();

function myFunction(msg, n) {
    console.log(msg, n);
}
myFunction("i am lucky girl!", 100);

//sum function 
function sum(a, b) {
    sum = a + b
    return sum;
}
let val = sum(3, 5);
console.log(val);

//arrow function
const arrowSum = (a, b) => {
    console.log(a + b);
}

//multiplication function
const arrowMul = (x, y) => {
    console.log(x * y);
}

function alphabet(x, y) {
    v = x / y
    return v;
}
let valu = (14 / 2)
console.log(valu);

// Practice Question
//used function 
function countVowel(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) { count++; }
    }
    console.log(count);
}

//used arrow function
const countvow = (str) => {
    let cout = 0;
    for (const chor of str) {
        if (chor === "a" ||
            chor === "e" ||
            chor === "i" ||
            chor === "o" ||
            chor === "u"
        ) { cout++; }

    }
    console.log(cout);
}

//Used ForEach Loop in array
let numbers = [11, 12, 13, 14, 15]

numbers.forEach(function printVal(val) {
    console.log(val);
})
let city = ["Mumbai", "Pune", "Hyderabad", "Banglore"]
city.forEach((val, Idx) => {
    console.log(val.toUpperCase(), Idx);
})


let nums = [2, 3, 4, 5, 6, 7, 8, 9]
nums.forEach((num) => {
    console.log(num * num);
})

//Map 
let numbe = [11111, 22222]
let newArr = numbe.map((val) => {
    //console.log(val);
    return val;
});
console.log(newArr);

//Filter
let arr = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let evenNum = arr.filter((val) => {
    return val % 2 === 0;

});
console.log(evenNum);

//reduce 
let numArr = [1, 2, 3, 14]
const arrSum = numArr.reduce((prev, cur) => {
    return prev + cur;
});
console.log(arrSum);

let largeNum = [101, 102, 232, 456, 999]
const highNum = largeNum.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
});
console.log(highNum);

//practice question
//Marks of students 90+
let rank = [45, 56, 99, 87, 91]
const rankOne = rank.filter((val) => {
    return val > 90;
});
console.log(rankOne);
//1 used prompt and create  an array of numbers fron 1 to n
let n = prompt("enter the number");
let Arr = [];
for (let i = 1; i <= n; i++) {
    Arr[i - 0] = i;
}
console.log(Arr);
//2 Calculate sum of all numbers in the array
const calculate = Arr.reduce((prev, cur) => {
    return prev + cur;
});
console.log("calculate =", calculate);


//3 calculate product of all numbers in the array (1*.....n)
const factorial = Arr.reduce((prev, cur) => {
    return prev * cur;
});
console.log(factorial);

//DOM Manipulation

let h1 = document.getElementsByClassName("firstheading"); //class
console.log(h1);
console.dir("h1");

//let h2 = document.getElementById("secheading"); //Id
//console.dir(h2);
//console.log("h2");

let paragraphs = document.getElementsByTagName("p"); //tag
console.dir(paragraphs);
console.log("paragraphs");

let parah = document.querySelector("p");
console.dir(parah);
console.log("parah");

let firstEl = document.querySelectorAll("p");
console.dir(firstEl);
console.log("firstEl");

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + "From Apna College Student"; //added heading here
console.log("h2.innerText");


let divs = document.querySelectorAll(".Box");
let idx = 1;
for (let div of divs) {
    div.innerText = `New Unique Value ${idx}`;
    idx++;
}


//divs[0].innerText = "New Unique Value 1";
//divs[1].innerText = "New Unique Value 2";
//divs[2].innerText = "New Unique Value 3";

//used Get Attribute

let div = document.querySelector("div");
//console.log(div);
console.log(div.getAttribute("class"));


let attr = document.querySelector("div");
//console.log(attr.getAttribute("name"));
console.log(attr.setAttribute("name", "JAVASCRIPT"));

//node.style
//let h2 = document.querySelector("h2");
//h2.style.backgroundColor = "red";
//h2.style.fontSize = "30px";


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi, I am a new ! </i>";


document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();
newHeading.remove();