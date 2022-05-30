import checkToken from '../../middlewares/checkToken.js'
import validator from '../../middlewares/validation.js'
import { Router } from "express"
import CT from './controller.js'


const route = Router()

route.get('/messages', checkToken, CT.GET_MESSAGES)
route.post('/messages', checkToken, validator, CT.POST_MESSAGES)

export default route