const express = require('express')
const router = express.Router()
const usersController = require('../controllers/userControllers.js')
const verifyJWT = require('../middlewares/verifyJWT.js')

// router.use(verifyJWT)

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router;