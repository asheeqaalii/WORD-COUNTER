#!/user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const sentence = await inquirer.prompt({
    name: "wordcount",
    type: "input",
    message: chalk.yellow("ENTER YOUR SENTENCE")
});
const words = sentence.wordcount.trim().split(" ");
console.log(words);
console.log(chalk.magenta(`\nYOUR SENTENCE HAS ${words.length} WORDS`));
