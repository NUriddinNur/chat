import checkToken from '../../middlewares/checkToken.js'
import validator from '../../middlewares/validation.js'
import { Router } from "express"
import CT from './controller.js'


const route = Router()

route.get('/login', CT.GET_LOGIN)
route.get('/register', CT.GET_REGISTER)

route.post('/login', CT.POST_LOGIN)
route.post('/register', validator, CT.POST_REGISTER)

route.get('/users', checkToken, CT.GET_USERS)

export default route