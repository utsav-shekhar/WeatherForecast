const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://utsav2571:@Utsav12@cluster0.xtduae6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectToMongo;
