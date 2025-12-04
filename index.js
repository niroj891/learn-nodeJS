const { error } = require("console");
const fs = require("fs");

const { square } = require("./utils.js");
// Non blocking operation

fs.readFile("../data/data.txt", "utf-8", (error, data) => {
    if (error) throw error;
    console.log(data);
})

const result = fs.readFileSync("../data/data.txt", "utf-8")
console.log(result);
console.log("hello niroj");

const name = "niroj123";

console.log(`hello ${name}`);

const result1 = square(9);
console.log(result1)