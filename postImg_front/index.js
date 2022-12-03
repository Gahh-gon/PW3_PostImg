const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//MAPEAMENTO DA PASTA PUBLIC
app.use(express.static('public'));

//CONFIGURA O EJS COMO VIEW ENGINE (REDENRIZA AS PÁGINAS DE FRONT-END)
app.set('view engine', 'ejs');


//ROTA DE CADASTRO DE CATEGORIAS
app.get('/cadastroCategorias', (req, res)=>{
    res.render('categoria/index');
});

//ROTA DE LISTAGEM DE CATEGORIAS
app.get('/listagemCategorias', (req, res)=>{
    
    const urlListagemCategoria = 'http://localhost:3000/listarCategoria';

    
    axios.get(urlListagemCategoria)
        .then(
            (response)=>{
             
                let categoria = response.data;
                res.render('categoria/listagemCategoria',{categoria});

        }); 
    });

    //ROTA DE LISTAGEM DE EDIÇÃO
    app.get('/formEdicaoCategorias/:cod_categoria', (req, res)=>{
        
        //RECEBE O ID DE CATEGORIA QUE VAI SER EDITADO
        let {cod_categoria} = req.params;
        // console.log(id);

        //CHAMADA DO AXIOS PARA A API:
        const urlListagemCategoria = `http://localhost:3000/listarCategoria/${cod_categoria}`;
        
        axios.get(urlListagemCategoria)
        .then(
            (response)=>{

                let categoria = response.data;
                res.render('categoria/editarCategoria',{categoria});

            }
        )
    });

    //ROTA DE EDIÇÃO
    app.post('/alterarCategoria', (req, res)=>{

        const urlAlterarCategoria = 'http://localhost:3000/alterarCategoria';
        console.log(req.body);

        axios.put(urlAlterarCategoria, req.body)
        .then(
            res.send('ALTERADO!')
        )

    });

    app.get('/excluirCategoria/:cod_categoria', (req, res)=>{
        // console.log('ROTA DE EXCLUSÃO - ID: ' + req.params.id);
        let {cod_categoria} = req.params;
        
        const urlExcluirCategoria = `http://localhost:3000/deletarCategoria/${cod_categoria}`;
       
    
        axios.delete(urlExcluirCategoria)
        .then((response)=>{
            const urlListarCategoria = 'http://localhost:3000/listarCategoria';
            
            
            axios.get(urlListarCategoria)
            .then((response)=>{
                let categoria = response.data;
                res.render('categoria/listagemCategoria', {categoria});
            });
        })
    });

app.listen(3001, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3001');
});