//"mongodb+srv://robin:Hasankasim8@cluster0.wdgae.mongodb.net/test"
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to DB');
  } catch (error) {
    console.log('Error connecting DB', error);
  }
};

module.exports = connectDB;
