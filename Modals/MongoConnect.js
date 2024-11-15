const { default: mongoose } = require("mongoose");

const connectedDb = async () => {
  try {
    const res = await mongoose.connect(
      `mongodb+srv://${process.env.mongouser}:${process.env.mongopassword}@cluster0.wyvpikf.mongodb.net/demo-database`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log(`Connected to MongoDB: ${res.connection.host}`);
    return res;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectedDb;
