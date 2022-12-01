//inicio do projeto 

//testando e Aprendendo sobre o node e express

const express = require('express');
const routerController = require('./controller/routerController')

 console.log('teste de funcionalidade');
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log(' passou no index ');

app.use('/', routerController);
app.listen(3000, ()=>{
    console.log('Servidor web rodando na url http://localhost:3000');
})





