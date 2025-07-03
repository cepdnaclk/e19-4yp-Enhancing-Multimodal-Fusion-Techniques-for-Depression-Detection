import express from 'express'
import { addCounsellor } from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import { loginAdmin } from '../controllers/adminController.js'
import authAdmin from '../middleware/authAdmin.js'

const adminRouter = express.Router()

adminRouter.post('/add-counsellor',authAdmin,upload.single('image'),addCounsellor)
adminRouter.post('/login',loginAdmin)


export default adminRouter
