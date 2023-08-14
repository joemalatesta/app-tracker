import { Router } from 'express'

import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as applicationListCtrl from '../controllers/applicationList.js'
const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use( decodeUserFromToken )
router.get( '/', applicationListCtrl.index )
router.post('/', checkAuth, applicationListCtrl.create)
router.delete('/:id', checkAuth, applicationListCtrl.delete)
router.put('/:id', checkAuth, applicationListCtrl.update)


export { router }