const faltuMessage = '      hi,I am a girl.    '
const message = "hello world!"

const finalMessage = faltuMessage.trim()
const capitalMessage = message.toUpperCase()


//alert(message + faltuMessage);
// console.log(message + faltuMessage);

// console.log(eval('3+5'));


const student = {
    Name: "Janhvi R",
    age: 24,
    marks: 88.3,
    isPass: true
};
student["name"] = "jaya bhavsar";
// console.log(student["name"]);
student["age"] = 24 + 1;
// console.log(
student["age"]
    //);


const Product = {
    Name: "Parker Jotter Standard CT Ball Pen (Black)",
    rating: 4,
    isDealoftheday: true,
    price: 270,
    offer: 5,
};
// console.log(Product);

const Profile = {
    userName: "Janhvi R",
    isFollow: true,
    post: 143,
    followers: 120,
    following: 5,
};
// console.log(Profile);

const Teacher = {
    userName: "techniSachin",
    post: 200,
    isFollow: false,
    followers: 100,
    following: 50,
};
// console.log(Teacher);

//let name = prompt("Hello");
//// console.log(name);
/*let num = prompt("Enter a number")
if (num % 5 === 0) {
    // console.log(num, "is multiple of 5")
} else {
    // console.log(num, "is Not a multiple of 5")
}*/


/*let score = prompt("check your score 0 - 100:");
let grade;
if (score >= 90 && score <= 100) {
    grade = "A"
} else if (score >= 70 && score <= 89) {
    grade = "B"
} else if (score >= 60 && score <= 69) {
    grade = "C"
} else if (score >= 50 && score <= 59) {
    grade = "D"
} else if (score >= 0 && score <= 49) {
    grade = "F"
}
// console.log("According to your score ,your grade was:", grade);*/


//print 1 to 5 
//for (let i = 1; i <= 100; i++) {
//  // console.log("Apna College");
//}

//calculate sum 1 to 5
let sum = 0;
for (let i = 1; i <= 6; i++) {
    sum = sum + i;
}
// console.log("sum-", sum);

//while loop
let i = 1;
while (i <= 10) {
    // console.log("i=", i);
    i++;
}
let j = 1;
do {
    // console.log("Do While");
    j++;

} while (j <= 3);

//for of loop ------
// let str = "HareKrishna"
// size = 0;
// for (let i of str) {
//     // console.log("i=", i);
//     size++;
// }
// // console.log("size=", size);

// //for in loop
// let Nurse = {
//     Name: "Pooja",
//     Age: 26,
//     cgpa: 7.5,
//     ispass: true,

// };
// for (let key in Nurse) {
//     // console.log("key=", key, "value=", Nurse[key]);
// }



//Practice question 1----> print even number  0-100
// let Num = 0
//     // for (let Num = 1; Num <= 100; Num++) {
//     //     if (Num % 2 === 0)
//     //         console.log("Num=", Num);
//     // }
//     //Practice question 2---->
// let gameNumber = 50;
// let userNumber = prompt("Guess the game number :");
// while (userNumber != gameNumber) {
//     userNumber = prompt("You entered the wrong number ,Guess again :");
// }
// console.log("Congratulation, You entered the Right Number...");


//string in JS 

let id = "     Welcome My Home     ";
let id2 = "Again";
id = id.toUpperCase();
id = id.trim(); // can remove  start and end space
id = id.slice(0, 13);
id = id.concat(id2);
//id = id2.replace("Again", "Sweet"); 
//id = id.charAt(2);
console.log(id);



//Practice question in String

let fullName = prompt("Enter your fullname without spaces :");
let userName = " @ " + fullName + fullName.length;
console.log(userName);