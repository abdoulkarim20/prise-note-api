const express = require('express')
const router = express.Router()
const {
    getAllNotes,
    createNote,
    getDetailNote,
    deleteNoteById,
    updateNote
} = require('../controllers/noteController')
/**Les routes sont */
router.get('/', getAllNotes)
router.post('/', createNote)
router.get('/:id', getDetailNote)
router.delete('/:id', deleteNoteById)
router.put('/:id', updateNote)

module.exports = router