import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
    console.log("connection success");
  } catch (error) {
    console.log("connection fail");
  }
};
