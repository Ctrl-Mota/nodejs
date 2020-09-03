const express = require('express');

const server = express();

server.use(express.json())
//Query params  = ?nome=nodeJS
//Route  params = /curso/2
//Request Body  = {nome: 'NodeJs', tipo: 'Backend'}


//localhost:3000/curso
const cursos = ['Node Js','Javascript','React Native'];

server.get('/cursos',(req,res)=>{

  return res.json(cursos)

})
server.get('/cursos/:index',(req, res)=>{

  const {index} = req.params
  return res.json(cursos[index])
})
server.post('/cursos',(req, res) => {

  const { name }= req.body
  cursos.push(name)
  return res.json(cursos)
})
server.put('/cursos/:index',  (req, res) =>{
  const {index} = req.params
  const {name} = req.body
  cursos[index] = name

  return res.json(cursos)
})
server.delete('/cursos/:index',(req, res)=>{

  const {index} = req.params
  cursos.splice(index,1)
  return res.json('Curso: '+cursos[index]+' deletado com sucesso!')
})
server.listen(3000);