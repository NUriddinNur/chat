import { USER_REGISTRATION_VALIDATION } from '#utils/validation'
import { ValidationError  } from '#utils/errors'

export default (req, res, next) => {
    try{
        if(req.url = '/register') {
            const {error} = USER_REGISTRATION_VALIDATION.validate({ body: req.body})
            if (error) {
                throw new ValidationError(error.message)
            }
            return next()
        }
    }catch(error) {
        next(error)
    }
}