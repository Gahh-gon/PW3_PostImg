const express = require('express');
const categoria = require('../model/modelLocal');
const router = express.Router();



router.get("/listarCategoria", (req, res) =>{

    categoria.findAll()
        .then(
            (categorias)=>{
                return res.status(200).json(categorias);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                    erroBancoDados: erro
                });
            }
        );
    });


    



    router.get('/listarCategoria/:cod_categoria',(req, res)=>{

        let {cod_categoria} = req.params;
    
        categoria.findByPk(cod_categoria)
            .then(
                (categoria)=>{
                    res.status(200).json(categoria);
                }
            ).catch(
                (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
                        erroBancoDados: erro
                    });
                }
            );
    });
    

   




    router.post('/inserirCategoria', (req, res)=>{

        let { nomeCategoria} = req.body;
     
        categoria.create(
            { nomeCategoria}
        ).then(
            ()=>{
                    return res.status(201).json({
                        erroStatus: false,
                        menssagemStatus: 'Categoria inserida com sucesso!'
                });
            }
        ).catch(
            (erro)=>{
                        return res.status(400).json({
                            erroStatus: true,
                            erroMessagem: 'Houve um erro ao cadastrar a categoria',
                            erroBancoDados: erro
                        });
            }
        );
    });



    router.put('/alterarCategoria', (req, res)=>{

        let {cod_categoria, nomeCategoria} = req.body;
    
        //ALTERANDO OS DADOS:
        categoria.update(
            {nomeCategoria},
            {where:{cod_categoria}}
        ).then( ()=>{
    
            return res.status(200).json({
                erroStatus: false,
                menssagemStatus: 'Categoria alterada com sucesso!'
            });
    
        }).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao excluir a categoria',
                    erroBancoDados: erro
                        });
            }
        );
    });
    

  


 router.delete('/deletarCategoria/:cod_categoria', (req, res)=>{
        let {cod_categoria} = req.params;
    
        categoria.destroy(
            {where: {cod_categoria}}
        ).then( ()=>{
    
            return res.status(200).json({
           erroStatus: false,
           menssagemStatus: 'Categoria alterada com sucesso!'
        });

    
        }).catch(
            (erro)=>{
                        return res.status(400).json({
                            erroStatus: true,
                            erroMessagem: ' erro ao tentar deletar a categoria',
                            erroBancoDados: erro
                        });
            }
        );
    });


  

    module.exports = router;




//     const express = require('express');

// /*CONFIGURAÇÃO DAS ROTAS DE CATEGORIA*/
// const router = express.Router();

// /* IMPORT DA MODEL DE CATEGORIA */
// const modelCategoria = require('../model/CategoriaModel');

// /* PARAMETROS DE ROTAS (QUALQUER VERBO):
// 1 - NOME DA ROTA - REPRESENTADO POR UMA STRING
// 2 - CALLBACK QUE TRATA REQUISIÇÃO (req) E RESPOSTA (res)
// */
// /*ROTAS DE CRUD DE CATEGORIAS:*/
// router.get('/listarCategoria', (req, res)=>{

//     // console.log('TESTE DE ROTA GET DE CATEGORIAS');
//     // console.log('----A REQUISIÇÃO GET PASSOU PELA CATEGORIA CONTROLLER----');
//     // res.send('----TESTE DE ROTA GET DE CATEGORIAS----');

//     //LISTANDO OS DADOS SEM CRITÉRIOS
//     modelCategoria.findAll()
//         .then(
//             (categorias)=>{
//                 return res.status(200).json(categorias);
//             }
//         ).catch(
//             (erro)=>{
//                 return res.status(400).json({
//                     erroStatus: true,
//                     erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
//                     erroBancoDados: erro
//                 });
//             }
//         );

// });

// //LISTANDO OS DADOS COM CRITÉRIOS
// router.get('/listarCategoria/:id',(req, res)=>{

//     let {id} = req.params;

//     modelCategoria.findByPk(id)
//         .then(
//             (categoria)=>{
//                 res.status(200).json(categoria);
//             }
//         ).catch(
//             (erro)=>{
//                 return res.status(400).json({
//                     erroStatus: true,
//                     erroMessagem: 'Houve um erro ao selecionar os dados de categoria',
//                     erroBancoDados: erro
//                 });
//             }
//         );

// });

// 

// router.put('/alterarCategoria', (req, res)=>{

//     // console.log('A REQUISIÇÃO PUT PASSOU PELA CATEGORIA CONTROLLER');
//     // res.send('TESTE DE ROTA PUT DE CATEGORIAS');

//     //RECEBENDO OS DADOS:
//     let {id, nome_categoria} = req.body;

//     //ALTERANDO OS DADOS:
//     modelCategoria.update(
//         {nome_categoria},
//         {where:{id}}
//     ).then( ()=>{

//         return res.status(200).json({
//             erroStatus: false,
//             menssagemStatus: 'Categoria alterada com sucesso!'
//         });

//     }).catch(
//         (erro)=>{
//                     return res.status(400).json({
//                         erroStatus: true,
//                         erroMessagem: 'Houve um erro ao alterar a categoria',
//                         erroBancoDados: erro
//                     });
//         }
//     );

// });



// module.exports = router;