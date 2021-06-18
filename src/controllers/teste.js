const fs = require('fs');
const uuid = require ('uuid');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const db = require ('../database')


const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.VAR_IBM_SECRET_KEY,
  }),
  serviceUrl: process.env.VAR_IBM_URL,
});



module.exports = {
    criarComentario: async function (req, res){
        const {text} = req.body
        
        const synthesizeParams = {
            text: text,
            accept: 'audio/wav',    
            voice: 'pt-BR_IsabelaVoice',
          };
        textToSpeech.synthesize(synthesizeParams).then(response => {
            return textToSpeech.repairWavHeaderStream(response.result);
        }).then(async(buffer) => {
            let caminho = uuid.v4()
            fs.writeFileSync(`comentarios/${caminho}.wav`, buffer);

            let sql = `INSERT INTO comentarios (comentario, arquivo) VALUES ("${text}", "${caminho}")`
            
            await db.promise().query(sql).then(([ret]) => {
                res.status(200).json({
                    caminho: caminho
                })
            }).catch ((error)=>{
                console.log (error)
            })

        }).catch(err => {
            console.log('error:', err);
        });
        res.status(500).send()
    },

    pegaArquivos: async function (req, res){
        let sql = 'SELECT * FROM comentarios'
        var arquivosPegados = await db.promise().query(sql).then(([ret]) => {
            var retorno = JSON.stringify(ret)
            return JSON.parse(retorno)
        }).catch ((error)=>{
            console.log (error)
        })
        res.status(200).json(arquivosPegados)
    }


}
