
$(document).ready( function () {
    const table = $('#table_id').DataTable();

   axios({
       url:'http://localhost:3000/api/directory/list',
       method: 'GET'
    }).then(result =>{
        result.data.rows.forEach(element => {
            table.row.add([element.fullName, element.Department.name,
            element.internalEmail, element.personalEmail, element.personalPhone]).draw(false)
        });       
    })
} );

