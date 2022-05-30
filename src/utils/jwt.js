import { ForbiddenError, InternalServerError } from '#utils/errors'
import JWT from 'jsonwebtoken'

export default {     
    sign: payload => {
        try {
            return JWT.sign(payload, process.env.JWT_SECRET, { expiresIn: 60 * 30 })
        }catch(error) {
            throw new InternalServerError(error.message)
        }
    },
    verify: token => {
        try{
            return JWT.verify(token, process.env.JWT_SECRET)
        }catch(error) {
            throw new ForbiddenError(error.message)
        }
    }
}