import path from 'path'
import fs from 'fs'

export default (error, req, res, next) => {
    console.log('error name: ', error.name)
    console.log('error message: ', error.message)

    const logFilePath = path.join(process.cwd(), 'logger.txt')
    fs.appendFileSync(
        logFilePath,
        `${req.url}__${req.method}__${Date.now}__${error.name}__${error.message}\n`
    )
    

    return res.status(500).json({
        status: 500,
        name: 'InternalServerError',
        message: 'Internal Server Error'
    })
}