import dotenv from "dotenv";
import app from "./app.js"
import connectDB from "./database.js";

dotenv.config();

const startServer = async () => {
    try{
        await connectDB();   

        app.on("error", error=>{
            console.log("ERROR: ", error)
            throw error;
        })

        app.listen(process.env.PORT ?? 8000, ()=>{
            console.log(`Server is running on ${process.env.PORT ?? 8000}`)
        })
    }catch(error){
        console.error(error)
    }   
}

startServer();