const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.set ("views", "./src/views")
app.set ("view engine", "hbs")
app.use('/comentarios', express.static('comentarios'))


require ('dotenv').config()


const controllers = require ('./src/controllers/teste')


app.post ('/criaComentario', controllers.criarComentario)
app.get ('/pegaArquivos', controllers.pegaArquivos)


app.get ('/', controllers.renderIndex)


app.listen(8081, () =>{
    console.log ("Server rodando")
})

