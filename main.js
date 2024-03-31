import inquirer from "inquirer";
let mybalance = 10000; // dollar
let mypin = 3333;
let pinanswer = inquirer.prompt([
    {
        name: "q1",
        message: "enter your pin",
        type: "number"
    }
]);
console.log(mybalance);
