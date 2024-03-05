const express = require('express')
const mysql = require('mysql')
const mydb = require('../data/dbconfig.json')

const mysqlapi = express.Router();

mysqlapi.use(express.json());
mysqlapi.use(express.urlencoded({ extended: true }))

const myconnection = mysql.createPool(mydb);



mysqlapi.get('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm;

    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB ERROR" + err)
        connect.query(`select * from ${tablenm}`, (error, result) => {
            if (error) throw console.log("QUERY ERROR" + error)
            res.send(result);
            console.log(result) // for developer
            connect.release(); // 해당 쿼리가 성공적으로 실행된 후 요청을 종료
        }
        )

    })
})


module.exports = mysqlapi;