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
    




    
    
    router.post("/inserirCategoria", (req, res) =>{
    
        let {cod_categoria, nomeCategoria} = req.body;

        categoria.create(
            {nomeCategoria}
        ).then(
            ()=>{
                    return res.status(201).json({
                        erroStatus: false,
                        menssagemStatus: 'Categoria foi inserida'
                });
            }
        ).catch(
            (erro)=>{
                        return res.status(400).json({
                            erroStatus: true,
                            erroMessagem: 'Houve um erro a tentar colocar a categoria',
                            erroBancoDados: erro
                        });
            }
        );
    
    
    });

    router.put("/alterarCategoria", (req, res) =>{


        
  

    //RECEBENDO OS DADOS:
    let {id, nome_categoria} = req.body;

    //ALTERANDO OS DADOS:
    modelCategoria.update(
        {nome_categoria},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Categoria alterada com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar a categoria',
                        erroBancoDados: erro
                    });
        }
    )
     

});



    
       

    router.delete("/post", (req, res) =>{
    
        res.send(' <h3>Teste get</h3>');
    
    })

    module.exports = router;