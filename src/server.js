const express = require('express');
const server = express();
const logger = require('morgan');
const routes = require('./routes/index.js');

server.use(express.json())
const urlencoded = express.urlencoded({extended:true});
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*' ); //Autorizo recibir solicitudes de este dominio
    res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTION, DELETE');
    next();
});
server.use(logger('dev'));
server.use('/rickandmorty', routes);

server.use('/',(req, res)=>{
    res.status(200).json({message: 'in first server in EXPRESS'})
} )




module.exports = server

