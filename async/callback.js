// callback function used as a parameter
// Higher order function : funtion that accepets 
//  //functio as parameter
// Asynchrounous programming
import fs from "fs";

fs.readFile("node/data/tata.txt", "utf8", (error, data) => {
    console.log(data);
});

console.log("hello1")
console.log("hello2")


function greet(abc) {


}

greet(function () { })

const test = [

]

test.map(() => { })

function myfunction() {

}

function hello(myfunction)