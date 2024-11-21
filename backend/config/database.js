const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log(process.env.DB_URI);
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err.message);
      process.exit(1); // Exit process with failure
    });
};

module.exports = connectDatabase;
