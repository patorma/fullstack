require('dotenv').config()
const express = require('express')
const { appConfig } = require('./config') //destructuring


const app = express()


app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))