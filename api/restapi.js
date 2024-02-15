const express = require('express')
const mysql = require('mysql')
const mydb = require('../data/dbconfig.json')

const swiperapi = express.Router();

const dbconnect = mysql.createPool(mydb)

swiperapi.get('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm;

    dbconnect.getConnection((err, connect) => {
        if (err) throw console.log('db접속오류' + err)
        connect.query(`SELECT * FROM ${tablenm}`, (error, result) => {
            if (error) throw console.log('query오류' + error)
            res.send(result)
        })
    })
})


module.exports = swiperapi;