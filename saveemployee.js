var bodyParser = require('body-parser');
var db = require('./db');

async function SaveEmp(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var maxId = 1;

    db.one('SELECT MAX("Id") AS No FROM public."Employees"')
    .then((data) => {        
        maxId = data.no + 1;

        db.none('INSERT INTO public."Employees" VALUES (' + maxId + ', $1)', req.body.Name)
        .then(() => {
            console.log('Inserted');
            res.json({
            status: 'success',            
            message: 'Inserted'
            });  
            res.end();
        })
        .catch(err => {
            console.log(err);            
            res.json({
            status: 'failed',          
            message: 'error'
            });  
            res.end();
        });
    })
    .catch(error => {
        console.log(error);
        res.json({
          status: 'failed',          
          message: 'error'
        });  
        res.end();
    }); 
}

module.exports = SaveEmp;