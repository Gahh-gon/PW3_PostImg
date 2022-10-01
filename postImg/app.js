//inicio do projeto 

//testando e Aprendendo sobre o node e express

const express = require('express');


const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const routerController = require('./controller/routerController')

app.use('/', routerController);

app.listen(3000, ()=>{
    console.log('Servidor web rodando na url http://localhost:3000');
})
