const express = require('express');

const server = express();

server.use(express.json())
//Query params  = ?nome=nodeJS
//Route  params = /curso/2
//Request Body  = {nome: 'NodeJs', tipo: 'Backend'}


//localhost:3000/curso
const cursos = ['Node Js','Javascript','React Native'];

//middleware Global
server.use((req, res, next)=>{
  console.log('REQUISIÇÃO CHAMADA')
  return next();
})

function CheckCurse(req,res,next) {
  if(!req.body.name){
    return res.status(400).json({ error: "Nome do curso é obrigatório"})
  }
  return next();
  
}
function CheckIndexCurse(req,res,next) {
  const curso = cursos[req.params.index]

  if(!curso){
    return res.status(400).json({ error: "O Curso não existe"})
  }
  return next();
  
}
server.get('/cursos',(req,res)=>{

  return res.json(cursos)

})
server.get('/cursos/:index',(req, res)=>{

  const {index} = req.params
  return res.json(cursos[index])
})
server.post('/cursos', CheckCurse, CheckIndexCurse, (req, res) => {

  const { name }= req.body
  cursos.push(name)
  return res.json(cursos)
})
server.put('/cursos/:index', CheckCurse, CheckIndexCurse, (req, res) =>{
  const {index} = req.params
  const {name} = req.body
  cursos[index] = name

  return res.json(cursos)
})
server.delete('/cursos/:index',CheckIndexCurse,(req, res)=>{

  const {index} = req.params
  cursos.splice(index,1)
  return res.json('Curso: '+cursos[index]+' deletado com sucesso!')
})
server.listen(3000);