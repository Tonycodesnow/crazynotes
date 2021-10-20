const fs = require('fs');

const writeFile = fileContent => {
    console.log('writeFile')
    return new Promise((resolve, reject) => {
      fs.writeFile('./db/db.json', fileContent, err => {
          //if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }
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
    // Make copyFile() return a new Promise object, like we do with writeFile() above.
    return new Promise((resolve, reject) => {
        // Move the fs.copyFile() code from app.js into the returning Promise object's function in our copyFile() function 
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // If there's an error, reject() the error and return out of the function.
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Successful'
                // If it's successful, resolve() it with a success message.
            });
        });
    });
};

module.exports = {
    writeFile, copyFile
};
