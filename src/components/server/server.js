// const express = require('express');
// const mysql = require('mysql2');

// const app = express()
// const PORT = 3306

// const DB = mysql.createConnection({
//     host:'localhost',
//     user: 'root',
//     password: '85692',
//     database: 'bottega-university',
// });

// DB.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log('Exito!')
// })

// app.listen(PORT, () =>{
//     console.log(`Servidor escuchando http://localhost:${PORT}`);
// })

const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '85692SQL',
  database: 'cat_data_base'
});
// connect to the MySQL database
connection.connect((error)=>{
if(error){
console.error('Error connecting to MySQL database:', error);
}else{
console.log('Connected to MySQL database!');
}
});
// close the MySQL connection
connection.end();