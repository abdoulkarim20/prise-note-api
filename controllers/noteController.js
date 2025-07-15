const Note = require("../models/Note");
const getAllNotes = async (req, res, nex) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.json({
            success: true,
            count: notes.length,
            data: notes,
            message: 'Notes récupérées avec succès'
        })
    } catch (err) {
        next(error);
    }
};

const createNote = async (req, res, next) => {
    try {
        const { titre, contenue } = req.body;
        const newNote = new Note({
            titre,
            contenue
        });
        const savedNote = await newNote.save();
        res.status(201).json({
            success: true,
            data: savedNote,
            message: 'Note créée avec succès'
        });
    } catch (error) {
        next(error);
    }
};

const getDetailNote = async (req, res, nex) => {
    try {
        const note = await Note.findById(req.params.id)
        res.json({
            success: true,
            data: note,
            message: 'Note récupérée avec succès'
        })
    } catch (error) {
        nex(error)
    }
}

module.exports = {
    getAllNotes,
    createNote,
    getDetailNote
}