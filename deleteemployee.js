var db = require('./db');

async function DeleteEmp(req, res)
{
    res.setHeader('Content-Type', 'application/json');

    db.none('DELETE FROM public."Employees" WHERE "Id" = $1', req.params.id)
    .then(() => {
        console.log('Deleted');
        
        res.json({
        status: 'success',            
        message: 'Deleted'
        });  
        res.end();
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

module.exports = DeleteEmp;