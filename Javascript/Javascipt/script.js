//Arrays----->

//let marks = [90, 82, 75, 63, 41, 36];
//marks[0] = 45;
//marks[2];
//console.log(marks);
//console.log(marks[2]);



//let Gods = ["Bramha", "Vishnu", "Mahesh"];
// console.log(Gods);



//looping over an array
let Devi = ["Mahalakshmi", "Sarswati", "Mahakali", "Hingulambika", "Saptshrungi", "RenukaMata", "Rajrajeshwari"];
for (let i = 0; i < Devi.length; i++) {
    console.log(Devi[i]);

}

let cities = ["Hyderabad", "Mumbai", "Delhi", "Gujrat", "Pune"];
for (let city of cities) {
    console.log(city.toUpperCase());
}


//Question---->
let Marks = [85, 97, 44, 37, 76, 60];

sum = 0;

for (let val of Marks) {
    sum += val;
}
let avg = sum / Marks.length;
console.log(`Average Marks of the Class = ${avg}`);