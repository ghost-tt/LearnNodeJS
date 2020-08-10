const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./notes');

//For argument parsing we use builder object property

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //force to be required
            type: 'string' //force to be string not boolean in case of without title
        },
        body: {
            describe: 'Note body',
            demandOption: true, //force to be required
            type: 'string' //force to be string not boolean in case of without title
        }
    },
    handler: ({title, body}) => {
        addNote(title, body);
    }
});

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //force to be required
            type: 'string' //force to be string not boolean in case of without title
        }
    },
    handler: ({title}) => {
        removeNote(title);
    }
});

yargs.command({
    command: 'list',
    description: 'List the notes',
    handler: ({title}) => {
        listNotes(title);
    }
});


yargs.command({
    command: 'read',
    description: 'Read the notes',
    handler: function ({title}) {
        readNote(title);
    }
});


yargs.argv;