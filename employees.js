var db = require('./db');

async function GetEmployeeList(req, res)
{
    var employeeList = [];

    db.many('SELECT * FROM public."Employees" ORDER BY "Name" ASC')
    .then(emps => {    
        emps.forEach((emp) => {
            employeeList.push({Id: emp.Id, Name: emp.Name});  
        }); 

        console.log('Fetching...');

        res.setHeader('Content-Type', 'application/json');
        res.json({
          status: 'success',
          data: JSON.stringify(employeeList),
          message: 'Retrieved'
        });  
        res.end();
    })
    .catch(error => {
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        res.json({
          status: 'failed',          
          message: 'error'
        });  
        res.end();
    });
}

module.exports = GetEmployeeList;


