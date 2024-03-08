import mongoose from "mongoose";

const ConnectMongo = async() => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then((data) => {
      console.log("Successfully connected With " + data.connections[0].host);
    }).catch((e) => {
      console.log(e)
    });
};

export default ConnectMongo;
