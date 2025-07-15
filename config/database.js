const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://rimkalechanchelier:mQRS6W29VZq3mNa7@cluster0.nrb8dmc.mongodb.net/notes-app');
        console.log('✅ MongoDB connecté:', conn.connection.host);
    } catch (error) {
        console.error('❌ Erreur de connexion MongoDB:', error.message);
        process.exit(1);
    }
}
module.exports = connectDB;