//Q1
let btn = document.createElement("button");
btn.innerText = "Click Me";

btn.style.backgroundColor = "red";
btn.style.color = "white";
document.querySelector("body").prepend(btn);

//Q2
let para = document.querySelector("p");
para.classList.add("newClass");
//para.classList.remove("newClass");



let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("click in inside div");
}

let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);

}

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    console.log("btn2 was clicked first");
});
btn2.addEventListener("click", () => {
    console.log("btn2 was clicked second");
});


//Question
/*let modeBtn = document.querySelector("#mode");
let currMode = "light";
modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});*/

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light"
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})




let box = document.querySelector(".box");
//console.log(box);
box.addEventListener("click", () => {
    console.log("box was clicked");
});