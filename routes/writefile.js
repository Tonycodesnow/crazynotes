const router = require("express").utils();
const fs = require('fs');
const path = require("path");

const writeFile = fileContent => {
    console.log('writeFile')
    return new Promise((resolve, reject) => {
      fs.writeFile('./db/db.json', fileContent, err => {
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
});
};

// Create a new function called copyFile. It doesn't need to accept any parameters.
const copyFile = () => {
    return new Promise((resolve, reject) => {
        // Use the fs module to copy the file from the original location to the new location.
        fs.copyFile('./db/db.json', './db/db.json.bak', err => {
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};

module.exports = {
    writeFile, copyFile
};
