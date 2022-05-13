const express = require('express');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  
const router = express.Router();
const mysql = require('mysql');
var nodemailer = require('nodemailer');
const request = require("request-promise");

 
const appRoot = require('app-root-path');
router.use(express.static(appRoot + '/public'));
http = require('http')




router.get('/', function (req, res) {
  
  if(req.query.login == 'PowerTrade' && req.query.senha == 'minhapower@2022ç'){

    referencia = req.query.referencia;

    if(req.query.referencia){

      sql = `SELECT * FROM vis_Tracking_Portal_Follow_API WHERE (IdCliente = 49043 OR IdImportador = 49043 OR IdExportador = 49043) AND (Numero_Processo = '${referencia}' OR Referencia_Cliente = '${referencia}') ORDER BY Data ASC`;
  
    }else{

      sql = `SELECT * FROM vis_Tracking_Portal_Follow_API WHERE (IdCliente = 49043 OR IdImportador = 49043 OR IdExportador = 49043) ORDER BY Data ASC`;
 
    }
     
    
       
    trans = {};
CONEXA_HEAD.execSql(new Request(sql, function(err, rowCount, rows){
  if(err) {
      throw err;
  }
}).on('doneInProc',function(rowCount_transbodo, more2, rows_transbodo){
var contun2 = 0;

rows_transbodo.forEach(function (column_trans) {
  trans[contun2] = {};
  
  column_trans.forEach(function (column_trans_entro) {
  
    if(column_trans_entro.value == null){
      column_trans_entro.value = '';
    }
    

 
    trans[contun2][column_trans_entro.metadata.colName] = column_trans_entro.value;



  });


  contun2 = contun2 + 1;
})


}).on('requestCompleted',function(rowCount, more, rows){


res.json(trans);



}));

  }else{
    res.json('acesso negado')
  }
  
  
});





module.exports = router;