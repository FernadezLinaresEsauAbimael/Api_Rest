const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const userRoutes = require("/Workspace/Materias/REACT-NATIVE/api_idgs_92/routes/user")

const app = express();
require('./config/databases')

// Milddleware
app.use(express.json());
app.use("/api", userRoutes); 

// Routes 
app.get("/", (req, res) => {
    res.send("Bienvenido a mi API")
})

const port = process.env.PORT || 3000;
const uridb = process.env.MONGODB_URI || 'Hola esta parte si funciona'; 
app.listen(port, () => {
    console.log(`${ uridb }`); 
    console.log(`This server in listening in pot ${port}`);
});