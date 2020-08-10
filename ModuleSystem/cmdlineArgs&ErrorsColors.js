const validator  = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');

const returnedNote = getNotes();


console.log(chalk.redBright(returnedNote));
console.log(validator.isEmail('gmail.com'));


console.log('-------------------------');

// display Error and Success
console.log(chalk.green('Success'));
console.log(chalk.yellowBright('Warning'));
console.log(chalk.red('Error'));


console.log('-------------------------');

//display cmdline arguments
console.log(process.argv[2])


