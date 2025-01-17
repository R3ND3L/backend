import express, { Response, Request, Router } from "express";
import { debuglog } from "../helpers/debuglog";

/**
 * @fileoverview This file includes all API routes for server
 */
const router: Router = express.Router() // activate router
// DEPENDENCIES
import * as userCtrl from "../controllers/user_controller"
import * as pictureCtrl from "../controllers/picture_controller"
import { upload } from "../config";





//test
router.get('/test', (req: Request, res: Response): void => {
    debuglog('LOG', 'router - test', 'Router test success')
    res.json({ 'result': ' router test success' })
})

// Here the HTTP methods may be changed. When doing that, check that functions of changed HTTP requests
// have the needed requirements ( the line req.body... should be changed  to req.params... in functions with GET request)
// Also, follow the right path for the API.
/**
 * When it is GET method 
 * For ex: router.get('/user/nameOfFunction/:id', next function) 
 * When it is POST method, no values are added to URL 
 * For ex: router.post('/signup', userCtrl.signup)
 */

// users API endpoints
router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)
router.get('/user/getInfo/:id', userCtrl.getUserInfo)
router.post('/user/getUserUserName', userCtrl.getUserUsername)
router.post('/user/updateUserInfo', userCtrl.updateUserInfo)
router.post('/user/updateUserPassword', userCtrl.updateUserPassword)
router.delete('/user/deleteUser', userCtrl.deleteUser)


// pictures API endpoints 
router.post('/picture', upload.single('pictureImage'), pictureCtrl.sharePicture)
router.post('/picture/getPictureById', pictureCtrl.getPictureById)
router.post('/picture/getPictureIdByUserId', pictureCtrl.getPictureIdByUserId)
router.post('/picture/deletePicture', pictureCtrl.deletePicture)
router.post('/picture/updatePictureCaption', pictureCtrl.updatePictureCaption)

// create a post feed of all users
router.get('/users-posts', pictureCtrl.getAllPosts)

export { router }