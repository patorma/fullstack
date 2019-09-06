const mongoose = require('mongoose')
c = console.log
    //cuando se abra una conexionejecuta el callback 
    //connection es un evento de mongoose
mongoose.connection.on('open', () => c('db connected'))

async function connectDb({ host, port, dbName }) {
    //se destructura para obtener informacion de variables disponible
    const uri = `mongodb://${host}:${port}/${dbName}`
        //se pasa como parametro a connect
    await mongoose.connect(uri, { useNewUrlParser: true }) //para los mensajes de consola
}

module.exports = connectDb