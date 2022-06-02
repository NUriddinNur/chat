import { Router } from "express"
import CT from './controller.js'
import checkToken from '../../middlewares/checkToken.js'

const router = Router()

router.get('/', CT.GET)

export default router