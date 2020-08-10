const fs = require('fs');


function appendToExistingFile(data) {
    fs.appendFileSync('notes.txt', data)
}

module.exports = appendToExistingFile;
