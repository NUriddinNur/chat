import checkToken from '../../middlewares/checkToken.js'
import { Router } from "express"
import CT from './controller.js'


const route = Router()

route.get('/getPhoto/:token', checkToken, CT.GET_PHOTO)
route.get('/getUsername/:token', checkToken, CT.GET_USERNAME)
route.get('/getFile/:fileName/:token', checkToken, CT.GET_FILE)


export default route