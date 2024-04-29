#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
async function startQuiz() {
    let score = 0;
    console.log(chalk.yellowBright("Welcome to the Quiz! Test your knowledge and have fun!👋"));
    const select = await inquirer.prompt([
        {
            name: 'Subject',
            type: 'list',
            message: chalk.cyanBright('Select your desired subject to attempt Quiz?'),
            choices: [chalk.magentaBright('General Knowledge'), chalk.magentaBright('IQ'), chalk.magentaBright('Coding'), chalk.magentaBright('Quit')]
        }
    ]);
    while (true) {
        if (select.Subject === chalk.magentaBright('General Knowledge')) {
            const gk1 = await inquirer.prompt([
                {
                    name: 'q1',
                    type: 'list',
                    message: chalk.magenta('Which planet is known as the "Red Planet"?'),
                    choices: [chalk.cyanBright('Jupiter'), chalk.cyanBright('Mars'), chalk.cyanBright('Venus'), chalk.cyanBright('Seturn')]
                }
            ]);
            if (gk1.q1 === chalk.cyanBright('Mars')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Mars')));
            }
            const gk2 = await inquirer.prompt([
                {
                    name: 'q2',
                    type: 'list',
                    message: chalk.magenta('What is the largest mammal in the world?'),
                    choices: [chalk.cyanBright('Elephant'), chalk.cyanBright('Blue Whale'), chalk.cyanBright('Giraffe'), chalk.cyanBright('Hippopotamus')]
                }
            ]);
            if (gk2.q2 === chalk.cyanBright('Blue Whale')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Blue Whale')));
            }
            const gk3 = await inquirer.prompt([
                {
                    name: 'q3',
                    type: 'list',
                    message: chalk.magenta('What is the longest river in the world?'),
                    choices: [chalk.cyanBright('Nile'), chalk.cyanBright('Amazon'), chalk.cyanBright('Mississippi'), chalk.cyanBright('Yangtze')]
                }
            ]);
            if (gk3.q3 === chalk.cyanBright('Blue Whale')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Nile')));
            }
            const gk4 = await inquirer.prompt([
                {
                    name: 'q4',
                    type: 'list',
                    message: chalk.magenta('What is the currency of Japan?'),
                    choices: [chalk.cyanBright('Euro'), chalk.cyanBright('Yen'), chalk.cyanBright('Dollar'), chalk.cyanBright('Pound')]
                }
            ]);
            if (gk4.q4 === chalk.cyanBright('Yen')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Mars')));
            }
            const gk5 = await inquirer.prompt([
                {
                    name: 'q5',
                    type: 'list',
                    message: chalk.magenta('Which mountain range is located in Pakistan?'),
                    choices: [chalk.cyanBright('Andes'), chalk.cyanBright('Himalayas'), chalk.cyanBright('Alps'), chalk.cyanBright('Karakoram')]
                }
            ]);
            if (gk5.q5 === chalk.cyanBright('Himalayas')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is', chalk.green('Himalayas')));
            }
            const gk6 = await inquirer.prompt([
                {
                    name: 'q6',
                    type: 'list',
                    message: chalk.magenta('Which city is known as the "City of Gardens" in Pakistan?'),
                    choices: [chalk.cyanBright('Islamabad'), chalk.cyanBright('Karachi'), chalk.cyanBright('Lahore'), chalk.cyanBright('Peshawar')]
                }
            ]);
            if (gk6.q6 === chalk.cyanBright('Lahore')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Lahore')));
            }
            const gk7 = await inquirer.prompt([
                {
                    name: 'q7',
                    type: 'list',
                    message: chalk.magenta('Which river is known as the lifeline of Pakistan?'),
                    choices: [chalk.cyanBright('Ganges'), chalk.cyanBright('Indus'), chalk.cyanBright('Brahmaputra'), chalk.cyanBright('Jhelum')]
                }
            ]);
            if (gk7.q7 === chalk.cyanBright('Indus')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Indus')));
            }
            const gk8 = await inquirer.prompt([
                {
                    name: 'q8',
                    type: 'list',
                    message: chalk.magenta('Which Pakistani scientist is known as the "Father of Pakistan Nuclear Program?'),
                    choices: [chalk.cyanBright('Abdul qadeer khan'), chalk.cyanBright('Abdus Salam'), chalk.cyanBright('Pervez Hoodbhoy'), chalk.cyanBright('Samar Mubarakmand')]
                }
            ]);
            if (gk8.q8 === chalk.cyanBright('Abdul qadeer khan')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Abdul Qadeer Khan')));
            }
            const gk9 = await inquirer.prompt([
                {
                    name: 'q9',
                    type: 'list',
                    message: chalk.magenta('Which province of Pakistan is known as the "Land of the Pure?'),
                    choices: [chalk.cyanBright('Sindh'), chalk.cyanBright('Punjab'), chalk.cyanBright('Khyber Pakhtunkhwa'), chalk.cyanBright('Balochistan')]
                }
            ]);
            if (gk9.q9 === chalk.cyanBright('Punjab')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Punjab')));
            }
            const gk10 = await inquirer.prompt([
                {
                    name: 'q10',
                    type: 'list',
                    message: chalk.magenta('Pakistan shares its longest border with which country?'),
                    choices: [chalk.cyanBright('China'), chalk.cyanBright('Iran'), chalk.cyanBright('Balochistan'), chalk.cyanBright('Afghanistan')]
                }
            ]);
            if (gk10.q10 === chalk.cyanBright('Afghanistan')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Afghanistan')));
            }
            const ask1 = await inquirer.prompt([
                {
                    name: 'user1',
                    type: 'list',
                    message: 'Do You want to continue ?',
                    choices: [chalk.yellow('Continue'), chalk.yellow('Exit')]
                }
            ]);
            if (ask1.user1 === chalk.yellow('Continue')) {
                await startQuiz();
            }
            else {
                break;
            }
            //  <<<<<<<<<<<<<<<<<<<<< IQ Quiz Questions >>>>>>>>>>>>>>>>>>>>>>>>>
        }
        else if (select.Subject === chalk.magentaBright('IQ')) {
            const IQ1 = await inquirer.prompt([
                {
                    name: 'Q1',
                    type: 'list',
                    message: chalk.magenta('What is the next number in the sequence: 1, 4, 9, 16, ...?'),
                    choices: [chalk.cyanBright('25'), chalk.cyanBright('36'), chalk.cyanBright('49'), chalk.cyanBright('64')]
                }
            ]);
            if (IQ1.Q1 === chalk.cyanBright('25')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('25')));
            }
            const IQ2 = await inquirer.prompt([
                {
                    name: 'Q2',
                    type: 'list',
                    message: chalk.magenta('Which one of the five is least like the other four?'),
                    choices: [chalk.cyanBright('Dog'), chalk.cyanBright('Mouse'), chalk.cyanBright('Lion'), chalk.cyanBright('Snake')]
                }
            ]);
            if (IQ2.Q2 === chalk.cyanBright('Snake')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Snake')));
            }
            const IQ3 = await inquirer.prompt([
                {
                    name: 'Q3',
                    type: 'list',
                    message: chalk.magenta('How many months have 28 days?'),
                    choices: [chalk.cyanBright('28'), chalk.cyanBright('12'), chalk.cyanBright('1'), chalk.cyanBright('7')]
                }
            ]);
            if (IQ3.Q3 === chalk.cyanBright('1')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('1')));
            }
            const IQ4 = await inquirer.prompt([
                {
                    name: 'Q4',
                    type: 'list',
                    message: chalk.magenta('If you rearrange the letters "CIFAIPC", you would get the name of a(n):?'),
                    choices: [chalk.cyanBright('Country'), chalk.cyanBright('City'), chalk.cyanBright('Animal'), chalk.cyanBright('Ocean')]
                }
            ]);
            if (IQ4.Q4 === chalk.cyanBright('Ocean')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Ocean')));
            }
            const IQ5 = await inquirer.prompt([
                {
                    name: 'Q5',
                    type: 'list',
                    message: chalk.magenta('Which number should come next in the series? 1, 1, 2, 3, 5, 8, 13, ...?'),
                    choices: [chalk.cyanBright('13'), chalk.cyanBright('16'), chalk.cyanBright('21'), chalk.cyanBright('26')]
                }
            ]);
            if (IQ5.Q5 === chalk.cyanBright('21')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('21')));
            }
            const IQ6 = await inquirer.prompt([
                {
                    name: 'Q6',
                    type: 'list',
                    message: chalk.magenta('What is the capital of France?'),
                    choices: [chalk.cyanBright('Paris'), chalk.cyanBright('Dubai'), chalk.cyanBright('Madrid'), chalk.cyanBright('Rome')]
                }
            ]);
            if (IQ6.Q6 === chalk.cyanBright('Paris')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Paris')));
            }
            const IQ7 = await inquirer.prompt([
                {
                    name: 'Q7',
                    type: 'list',
                    message: chalk.magenta('If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?'),
                    choices: [chalk.greenBright('True'), chalk.redBright('False')]
                }
            ]);
            if (IQ7.Q7 === chalk.greenBright('True')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('True')));
            }
            const IQ8 = await inquirer.prompt([
                {
                    name: 'Q8',
                    type: 'list',
                    message: chalk.magenta('Which of the following is not a primary color?'),
                    choices: [chalk.cyanBright('Red'), chalk.cyanBright('Green'), chalk.cyanBright('Purple'), chalk.cyanBright('Yellow')]
                }
            ]);
            if (IQ8.Q8 === chalk.cyanBright('Purple')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('Purple')));
            }
            const IQ9 = await inquirer.prompt([
                {
                    name: 'Q9',
                    type: 'list',
                    message: chalk.magenta('A farmer has 17 sheep, and all but 9 die. How many sheep does the farmer have left??'),
                    choices: [chalk.cyanBright('8'), chalk.cyanBright('9'), chalk.cyanBright('17'), chalk.cyanBright('26')]
                }
            ]);
            if (IQ9.Q9 === chalk.cyanBright('9')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('9')));
            }
            const IQ10 = await inquirer.prompt([
                {
                    name: 'Q10',
                    type: 'list',
                    message: chalk.magenta('Which number is the odd one out: 3, 6, 9, 12, 15??'),
                    choices: [chalk.cyanBright('3'), chalk.cyanBright('6'), chalk.cyanBright('9'), chalk.cyanBright('15')]
                }
            ]);
            if (IQ10.Q10 === chalk.cyanBright('15')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('15')));
            }
            const ask = await inquirer.prompt([
                {
                    name: 'user',
                    type: 'list',
                    message: 'Do You want to continue ?',
                    choices: [chalk.greenBright('Continue'), chalk.redBright('Exit')]
                }
            ]);
            if (ask.user === chalk.greenBright('Continue')) {
                await startQuiz();
            }
            else {
                break;
            }
            // <<<<<<<<<<<<<<<<<< Coding Quiz >>>>>>>>>>>>>>>>>>>>>>
        }
        else if (select.Subject === chalk.magentaBright('Coding')) {
            const code1 = await inquirer.prompt([
                {
                    name: 'ques1',
                    type: 'list',
                    message: chalk.magenta('What is TypeScript?'),
                    choices: [chalk.cyanBright('A programming language developed by Google.'),
                        chalk.cyanBright('A superset of JavaScript that adds static types.'),
                        chalk.cyanBright('A JavaScript library for building user interfaces.'),
                        chalk.cyanBright('An open-source database management system.')]
                }
            ]);
            if (code1.ques1 === chalk.cyanBright('A superset of JavaScript that adds static types.')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('A superset of JavaScript that adds static types.')));
            }
            const code2 = await inquirer.prompt([
                {
                    name: 'ques2',
                    type: 'list',
                    message: chalk.magenta('Which keyword is used to declare variables in TypeScript?'),
                    choices: [chalk.cyanBright('var'), chalk.cyanBright('let'), chalk.cyanBright('const'), chalk.cyanBright('def')]
                }
            ]);
            if (code2.ques2 === chalk.cyanBright('let')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('let')));
            }
            const code3 = await inquirer.prompt([
                {
                    name: 'ques3',
                    type: 'list',
                    message: chalk.magenta('What data type is used to represent a single character in TypeScript?'),
                    choices: [chalk.cyanBright('char'), chalk.cyanBright('letter'), chalk.cyanBright('string'), chalk.cyanBright('character')]
                }
            ]);
            if (code3.ques3 === chalk.cyanBright('string')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('string')));
            }
            const code4 = await inquirer.prompt([
                {
                    name: 'ques4',
                    type: 'list',
                    message: chalk.magenta('How do you define an array in TypeScript?'),
                    choices: [chalk.cyanBright('array[]'), chalk.cyanBright('int[]'), chalk.cyanBright('Array<number>'), chalk.cyanBright('intArray[]')]
                }
            ]);
            if (code4.ques4 === chalk.cyanBright('array[]')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('array[]')));
            }
            const code5 = await inquirer.prompt([
                {
                    name: 'ques5',
                    type: 'list',
                    message: chalk.magenta('What is the correct syntax for defining a function in TypeScript?'),
                    choices: [chalk.cyanBright('def functionName() {}'),
                        chalk.cyanBright('function functionName() {}'),
                        chalk.cyanBright('functionName() {}'),
                        chalk.cyanBright('func functionName() {}')]
                }
            ]);
            if (code5.ques5 === chalk.cyanBright('function functionName() {}')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('function functionName() {}')));
            }
            const code6 = await inquirer.prompt([
                {
                    name: 'ques6',
                    type: 'list',
                    message: chalk.magenta('What keyword is used to define a class in TypeScript?'),
                    choices: [chalk.cyanBright('class'), chalk.cyanBright('Class'), chalk.cyanBright('def'), chalk.cyanBright('interface')]
                }
            ]);
            if (code6.ques6 === chalk.cyanBright('class')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('class')));
            }
            const code7 = await inquirer.prompt([
                {
                    name: 'ques7',
                    type: 'list',
                    message: chalk.magenta('What is the output of typeof true in TypeScript?'),
                    choices: [chalk.cyanBright('"boolean"'), chalk.cyanBright('boolean'), chalk.cyanBright('true'), chalk.cyanBright('undefined')]
                }
            ]);
            if (code7.ques7 === chalk.greenBright('boolean')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('boolean')));
            }
            const code8 = await inquirer.prompt([
                {
                    name: 'ques8',
                    type: 'list',
                    message: chalk.magenta('What is the purpose of the void keyword in TypeScript?'),
                    choices: [chalk.cyanBright('It specifies that a function returns nothing.'),
                        chalk.cyanBright('It specifies a function parameter as optional.'),
                        chalk.cyanBright('It specifies that a function returns a number.'),
                        chalk.cyanBright('All of the above')]
                }
            ]);
            if (code8.ques8 === chalk.cyanBright('All of the above')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('All of the above')));
            }
            const code9 = await inquirer.prompt([
                {
                    name: 'ques9',
                    type: 'list',
                    message: chalk.magenta('Which operator is used for string interpolation in TypeScript?'),
                    choices: [chalk.cyanBright('*'), chalk.cyanBright('#'), chalk.cyanBright('@'), chalk.cyanBright('$')]
                }
            ]);
            if (code9.ques9 === chalk.cyanBright('$')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('$')));
            }
            const code10 = await inquirer.prompt([
                {
                    name: 'ques10',
                    type: 'list',
                    message: chalk.magenta('In TypeScript, which keyword declares a variable that cannot be reassigned?'),
                    choices: [chalk.cyanBright('let'), chalk.cyanBright('const'), chalk.cyanBright('var'), chalk.cyanBright('static')]
                }
            ]);
            if (code10.ques10 === chalk.cyanBright('const')) {
                console.log(chalk.green('Correct Answer! Well done!'));
                score++;
                console.log(chalk.blue(`Your Current Score is ${score}`));
            }
            else {
                console.log(chalk.red('Incorrect Answer! Better luck next time! correct option is ', chalk.green('const')));
            }
            const ask = await inquirer.prompt([
                {
                    name: 'user',
                    type: 'list',
                    message: 'Do You want to continue ?',
                    choices: [chalk.greenBright('Continue'), chalk.redBright('Exit')]
                }
            ]);
            if (ask.user === chalk.greenBright('Continue')) {
                await startQuiz();
            }
            else {
                break;
            }
        }
        else if (select.Subject === chalk.magentaBright('Quit')) {
            console.log(chalk.greenBright('Thank you for playing! Goodbye!'));
            break;
        }
        else {
            console.log("Good Bye!");
        }
    }
}
startQuiz();
