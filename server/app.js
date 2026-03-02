const express = require('express');
const cors = require('cors');
const connectDB = require('./config'); // './config' kyunke dono same folder mein hain
require('dotenv').config({ path: '../.env' }); // '../.env' kyunke .env bahar wale folder mein hai

const app = express();

// Database connection call
connectDB();

// Middlewares
app.use(cors());
app.use(express.json()); // Frontend se data receive karne ke liye zaroori hai

// Test Route (Sirf check karne ke liye ke API chal rahi hai)
app.get('/', (req, res) => {
    res.send("Beauty Salon Management System API is running... ✨");
});

// Port setting
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} 🚀`);
});