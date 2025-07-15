require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.nrb8dmc.mongodb.net/${process.env.DATABASE_NAME}`);
        console.log('✅ MongoDB connecté:', conn.connection.host);
    } catch (error) {
        console.error('❌ Erreur de connexion MongoDB:', error.message);
        process.exit(1);
    }
}
module.exports = connectDB;