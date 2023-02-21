const Sequelize = require('sequelize');
const sequelize = new Sequelize("db_mysql","root","1234",{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{
    console.log("conectou")
}).catch(()=>{
    console.log("erro")
})
module.exports = sequelize;