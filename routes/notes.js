const express = require('express')
const router = express.Router()
const {
    getAllNotes,
    createNote,
    getDetailNote
} = require('../controllers/noteController')
/**Les routes sont */
router.get('/', getAllNotes)
router.post('/', createNote)
router.get('/:id', getDetailNote)
module.exports = router