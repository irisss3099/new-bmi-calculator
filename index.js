#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red.bgWhite.bold.underline(`\n\tBMI CALCULATOR\t\n`));
let data = await inquirer.prompt([
    {
        type: "list",
        name: "gender",
        message: "select your gender",
        choices: ["male", "female"]
    },
    {
        type: "number",
        name: "age",
        message: "write your age ="
    }
]);
const BMI = await inquirer.prompt([
    {
        type: "number",
        name: "weight",
        message: "Enter Your weight in kg:"
    },
    {
        type: "number",
        name: "height",
        message: "Enter Your height in meter: "
    }
]);
let bmi = 0;
bmi = BMI.weight / (BMI.height * BMI.height);
console.log(chalk.blueBright(`your BMI is ${bmi} kg/m2`));
if (bmi <= 18.5) {
    console.log(chalk.cyan.bold("Underweight!!!"));
}
else if (bmi <= 24.9) {
    console.log(chalk.yellow.bold("Normal weight!!!"));
}
else if (bmi <= 29.9) {
    console.log(chalk.magenta.bold("Over weight!!!"));
}
else {
    console.log(chalk.green.bold("Obesity!!!"));
}
;
