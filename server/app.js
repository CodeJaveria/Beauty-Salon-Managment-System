const express = require('express');
const cors = require('cors');
const connectDB = require('./config'); 
require('dotenv').config({ path: '../.env' }); 

const app = express();

// 1. Pehle Database connect karein
connectDB();

// 2. Phir Middlewares (Ye routes se pehle hone chahiye!)
app.use(cors());
app.use(express.json()); 

// 3. Phir Routes (Ab ye JSON data ko sahi se handle kar sakenge)
app.use('/api/auth', require('./routes/authRoutes'));

// 4. Test Route
app.get('/', (req, res) => {
    res.send("Beauty Salon Management System API is running... ✨");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} 🚀`);
});