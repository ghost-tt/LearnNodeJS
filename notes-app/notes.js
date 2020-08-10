const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your Notes";
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        });

        saveNotes(notes);
        console.log(chalk.green('New note added!'));
    } else {
        console.log(chalk.bgRedBright('Note tile taken'));
    }


}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);
    
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }

    saveNotes(notesToKeep);
    
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => console.log(chalk.green.inverse(note.title)))
}


const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if(note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
};