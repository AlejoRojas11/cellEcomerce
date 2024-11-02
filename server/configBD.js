const mysql =  require('mysql2')
const connection = mysql.createConnection({
	host: "sql10.freesqldatabase.com",
	user: "sql10714791",
	password: "HuvjmZPu94",
	database: "sql10714791",
	port: 3306,
})

connection.connect((error) =>{
	if(!error)
	   {console.log("Conexión exitosa")}
	else{ console.log("Conexión fallida")
	       }		
})

module.exports = connection

