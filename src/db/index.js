import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // console.log(connectionInstance)
    console.log(
      `\n mongodb connected ! DB HOST:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb connection ERROR:", error);
    process.exit(1); // read about
  }
};
export default connectDB;