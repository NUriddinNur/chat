import errorHandler from '/middlewares/errorHandler.js'
import logger from './middlewares/logger.js'
import fileUpload from 'express-fileupload'
import apiRoutes from './modules/index.js'
import { createServer } from 'http'
import { Server } from 'socket.io'
import express from 'express'
import path from 'path'
import ejs from 'ejs'
import './config.js'
import db from './utils/db.js'

import mockData from './mockdata.js'

import authHandler from './socket/authentication.js'
import messageHandler from './socket/message.js'

!async function () {
    const app = express()

    const database = await db()
    // mockData({ sequelize: database})

    
    app.engine('html', ejs.renderFile)
    app.set('view engine', 'html')
    app.set('views', path.join(process.cwd(), 'src', 'views'))
    
    
    app.use(express.static(path.join(process.cwd(), 'src', 'public')))
    app.use(express.json())
    app.use(fileUpload())
    app.use((req, res, next) => {
        req.models = database.models
        next()
    })


    app.use(apiRoutes)

    // error handler
    app.use(errorHandler)

    // logger
    app.use(logger)
    
    const httpServer = createServer(app)
    const io = new Server(httpServer)
    
    io.on('connection', async (socket) => {
        process.io = io
        process.socket = socket
        
        authHandler(io, socket, database)
        messageHandler(io, socket, database)
    })

    httpServer.listen(process.env.PORT, () => console.log(`Server resady at http://localhost:${process.env.PORT}`))
}()
