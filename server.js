const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const noteRoutes = require('./routes/notes');
const app = express();
const PORT = process.env.PORT || 3000
/*Faire une connexion a la base des donnees*/
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
/*Routes*/
app.use('/api/notes', noteRoutes);
/*Test api*/
const user = {
    prenoom: 'Abdoul Karim',
    nom: 'DIALLO',
    age: 28,
    profession: 'Developpeur senior',
    pays: 'Senegal'
}
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: 'API Notes fonctionne correctement !',
        data: user
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Serveur ${process.env.APP_NAME} lancé sur http://localhost:${PORT}`);
})