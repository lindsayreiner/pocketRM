const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/pocketrm",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .catch((err) => console.log(err));

module.exports = mongoose.connection;
