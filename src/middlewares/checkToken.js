import { ForbiddenError } from '#utils/errors'
import JWT from '#utils/jwt'

export default (req, res, next) => {
    try{
        const token = req.headers.token

        if(!token) {
            throw new ForbiddenError('Token is required!')
        }

        const { userId, agent} = JWT.verify(token)

        if (req.headers['user-agent'] != agent) {
            throw new ForbiddenError('Token is sent from wrong device!')
        }

        req.userId = userId
        next()
    }catch (error) {
        next(error)
    }
}