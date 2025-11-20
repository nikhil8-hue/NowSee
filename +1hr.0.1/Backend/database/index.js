import mongose from "mongoose";
import dotenv from "dotenv";

const connect_DB = async () => {
  try {
    const connectionInstence = await mongose.connect(
      `${process.env.MongoURI}/nowSee_DB`);
      console.log("DB connected successfully",`${connectionInstence.connection.host}`);
    
  } catch (error) {
    conslole.log("Error in DB connection", error);
  }
};
export default connect_DB;