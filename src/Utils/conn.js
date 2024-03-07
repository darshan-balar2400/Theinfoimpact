import mongoose from "mongoose";

const ConnectMongo = async() => {
  await mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("Successfully connected With " + data.connections[0].host);
    });
};

export default ConnectMongo;
