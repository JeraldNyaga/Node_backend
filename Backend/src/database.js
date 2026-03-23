import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("Connection successful", connectionInstance.connection.host)
    }catch (error){
        console.log("MongoDB connection failed")
        process.exit(1)
    }
}

export default connectDB