#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import banner from "node-banner";
let score = 0;
function wait() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve(1);
        }, 3000);
    });
}
async function welcome() {
    console.log(`         ${chalk.yellow(`HELLO`)} `);
    banner("QUIZ", "");
    await wait();
}
let askQuestion = async () => {
    let ans = await inquirer.prompt([
        {
            name: "q1",
            type: "list",
            message: "Who is the father of Computers? \n",
            choices: ["James Gosling", "Charles Babbage", "Dennis Ritchie", "Bjarne Stroustrup"]
        },
        {
            name: "q2",
            type: "list",
            message: "What is the full form of CPU? \n",
            choices: ["Computer Processing Unit", "Computer Principle Unit", "Central Processing Unit", "Control Processing Unit"]
        },
        {
            name: "q3",
            type: "list",
            message: "Which of the following computer language is written in binary codes only? \n",
            choices: ["pascal", "machine language", "C", "C#"]
        },
        {
            name: "q4",
            type: "list",
            message: "Which of the following is the brain of the computer? \n",
            choices: ["Central Processing Unit", "Memory", "Arithmetic and Logic unit", "Control unit"]
        }
    ]);
    if (ans.q1 == "Charles Babbage") {
        score += 10;
        console.log(chalk.green("charles Babbage is correct answer"));
    }
    else {
        console.log(chalk.red("charles Babbage is correct answer, your answer is wrong"));
    }
    if (ans.q2 == "Central Processing Unit") {
        score += 10;
        console.log(chalk.green("Central Processing Unit is correct answer"));
    }
    else {
        console.log(chalk.red("Central Processing Unit is correct answer, your answer is wrong"));
    }
    if (ans.q3 == "machine language") {
        score += 10;
        console.log(chalk.green("machine language is correct answer"));
    }
    else {
        console.log(chalk.red("machine language is correct answer, your answer is wrong"));
    }
    if (ans.q4 == "Central Processing Unit") {
        score += 10;
        console.log(chalk.green("central processing unit is correct answer"));
    }
    else {
        console.log(chalk.red("central processing unit is correct answer, your answer is wrong"));
    }
    console.log(`\n \n your total score is: ${chalk.yellow(score)}`);
};
function lastmessage() {
    console.log(`       ${chalk.green('GOOD BYE')} \n   ${chalk.blue('see you again')}`);
}
async function steps() {
    await welcome();
    await askQuestion();
    await wait();
    await lastmessage();
}
steps();
