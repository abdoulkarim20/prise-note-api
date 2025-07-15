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

const deleteNoteById = async (req, res, nex) => {
    try {
        const noteDeleted = await Note.findByIdAndDelete(req.params.id);
        if (!noteDeleted) {
            return res.status(400).json({
                success: true,
                message: `Aucune note trouvée pour cet identenfiant : ${res.params.id}`
            })
        }
        return res.status(200).json({
            success: true,
            message: `Note supprimée avec succes`
        })
    } catch (error) {
        nex(error)
    }
}

const updateNote = async (req, res, nex) => {
    try {
        const { titre, contenue } = req.body;
        const notreUpdated = await Note.findByIdAndUpdate(
            req.params.id,
            { titre, contenue, updatedAt: Date.now() },
            { new: true, runValidators: true }
        )
        if (!notreUpdated) {
            return res.status(400).json({
                success: true,
                message: "Aucune note trouvée"
            })
        }
        res.json({
            success: true,
            message: "Note modifiée avec succes",
            note: notreUpdated
        })
    } catch (error) {
        nex(error)
    }
}

module.exports = {
    getAllNotes,
    createNote,
    getDetailNote,
    deleteNoteById,
    updateNote
}