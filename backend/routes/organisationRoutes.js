const express = require('express')
const router = express.Router()
const notesController = require('../controllers/organisationControllers')
const verifyJWT = require('../middlewares/verifyJWT.js')



router.route('/')
    .get(notesController.getAllNotes)
    .post(notesController.createNewNote)
    .patch(notesController.updateNote)
    .delete(notesController.deleteNote)

module.exports = router