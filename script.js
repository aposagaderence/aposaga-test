console.log("Hello World");
const myName = "john derence aposaga";
let age = 20;
const number = 9163214632;
const address = "victorias city brgy 3 bat-us";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Adress: ${address}`);


//functions 

function greet(name) {

    return `good morning, ${name}`;


}
console.log(greet("Rene"));


//function 
function add(a, b) {
    return a + b;
}
function mdas(num1, num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let s = num1 - num2;
    return (`values: ${num1} and ${num2}\n product: ${m}\n quotient: ${d}\n sum: ${a}\n difference: ${s}`);


}

console.log(mdas(5, 3));

//query selector

const heading = document.querySelector("h1");
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectHeading = document.querySelector("#services h2");
console.log(projectHeading);

//text content

//heading.textContent 
heading.textContent = "My Portfolio";
contactHeading.textContent = "Lets connect";
projectHeading.textContent = "My Projects";








