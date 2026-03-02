const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Agar local use kar rahi hain to: 'mongodb://127.0.0.1:27017/salonDB'
    await mongoose.connect(process.env.MONGO_URI); 
    console.log("Database Connected Successfully! 💅✨");
  } catch (error) {
    console.error("DB Connection Error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;