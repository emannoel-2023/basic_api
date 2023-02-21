const express = require('express');
const routes = express();
const User = require('../models/User');

routes.use(express.json());

routes.get("/", async (req,res) =>{
    const user = await User.findAll();
    return res.json(user)
});

routes.post("/cadastrar", async (req,res)=>{
    await User.create(req.body)
     .then(()=>{
         return res.json({
             erro: false,
             mensagem:"Usuário cadastrado com sucesso!"
         });
     }).catch(()=>{
         return res.status(400).json({
             erro: true,
             mensagem:"Usuário não cadastrado com sucesso!"
         });
     })
 })

routes.delete("/:id/excluir", async (req, res, next)=> {
   await  User.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(User) {
        res.json({
          ID: req.params.id
        });
      }).catch(next);
    });

 
 module.exports = routes;