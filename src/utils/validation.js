import Joi from 'joi'


export const USER_REGISTRATION_VALIDATION = Joi.object({
    body: Joi.object({
        username: Joi.string().min(3).max(50).alphanum().required(),
        password: Joi.string().min(4).max(8).required()
    })
})