var db = require('./db');

async function GetEmpDetails(req, res)
{    
    db.one('SELECT * FROM public."Employees" WHERE "Id" = $1', req.params.id)
    .then((emp) => {        
        res.setHeader('Content-Type', 'application/json');
        res.json({
          status: 'success',
          data: { Id: emp.Id, Name: emp.Name },
          message: 'Retrieved'
        });  
        res.end();
    })
    .catch(error => {
        res.setHeader('Content-Type', 'application/json');
        res.json({
          status: 'failed',          
          message: 'error'
        });  
        res.end();
        console.log(error);
    });     
}

module.exports = GetEmpDetails;