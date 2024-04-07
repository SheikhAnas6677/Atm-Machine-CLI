#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Number",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct !!!! PIN CODE");
    let OperationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["WithDraw", "CheckBalance", "FastCash"],
        },
    ]);
    if (OperationAns.operation === "WithDraw") {
        let answerAmount = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            },
        ]);
        if (answerAmount.amount > myBalance) {
            console.log("Insufficent Balance");
        }
        else {
            myBalance -= answerAmount.amount;
            console.log(`Your Balance is ${myBalance}`);
        }
    }
    else if (OperationAns.operation === "CheckBalance") {
        console.log(`Your Balance is ${myBalance}`);
    }
    else if (OperationAns.operation === "FastCash") {
        let answerAmount = await inquirer.prompt([
            {
                name: "amount",
                message: "Select Option",
                type: "list",
                choices: [500, 1000, 1500, 2000, 5000],
            },
        ]);
        myBalance -= answerAmount.amount;
        console.log(`Your Remaining Balance is ${myBalance}`);
    }
}
else {
    console.log("InCorrect !!! PIN CODE");
}
