const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.set ("views", "./src/views")
app.set ("view engine", "hbs")


require ('dotenv').config()


const controllers = require ('./src/controllers/teste')


app.post ('/criaComentario', controllers.criarComentario)
app.get ('/pegaArquivos', controllers.pegaArquivos)


app.get ('/', (req, res) =>{
    res.render ("index")
})


app.listen(8081, () =>{
    console.log ("Server rodando")
})

