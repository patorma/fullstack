require('dotenv').config()
const app = require('./app')
const connectDb = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config') //destructuring



//se controla si hay un error en la bd
async function initApp(appConfig, dbConfig) {

    try {
        await connectDb(dbConfig)
        app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
    } catch (e) {
        console.log(e)
            //se termina el proceso
        process.exit(0)
    }
}
//ejecutamos initApp
initApp(appConfig, dbConfig)