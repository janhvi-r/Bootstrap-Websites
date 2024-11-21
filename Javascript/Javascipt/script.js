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


let number = [2, 2, 1, 3, 4, 5];
let sum = 0;
for (let num of number) {
    sum += num;

}
console.log(sum);
let avg1 = sum / number.length;
console.log(avg1);





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