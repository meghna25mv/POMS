const express=require('express');
const mongoose=require('mongoose');
const log4js=require('log4js');
const logger=log4js.getLogger();
logger.level='info';

/**
 * starting express framework by initialising
 */
const app=express();

const port = 4000;

/**
 * handler
 */
var purchaserHandler=require('./src/Handler/PurchaserHandler');


/**
 * listening to the port 4000
 */
app.listen(port);
logger.info('Listening to port no. '+port);

app.use(express.json());

app.use("/purchaserAPI",purchaserHandler);

module.exports=app;