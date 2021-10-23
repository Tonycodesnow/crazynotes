const fs = require('fs');
const path = require('path');


module.exports = app => {

    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data.toString()))
        })
    })
    app.post('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8', (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data.toString());
            notes.push({
                id: notes.length + 1,
                title: req.body.title,
                text: req.body.text
            });
            fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
                if (err) throw err;
                res.json(notes);
            });
        })
    })
    // DELETE requests a query parameter containing the id of a note to delete
    app.delete('/api/notes/:id', (req, res) => {
        fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8', (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data.toString());
            let newNotes = notes.filter(note => note.id !== parseInt(req.params.id));
            fs.writeFile('./db/db.json', JSON.stringify(newNotes), err => {
                if (err) throw err;
                res.json(newNotes);
            });
        })
    })
}
