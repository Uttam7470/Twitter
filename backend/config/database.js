// import mongoose from "mongoose";
// import dotenv from 'dotenv'

// dotenv.config({
//     path : "../config/.env"

// })

// function databaseConnection() {
//   mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//       console.log("Connected to MongoDB");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// export default databaseConnection;


import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({
    path: "./config/.env",  // Adjust this path if necessary
});

async function databaseConnection() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {

        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process with a failure code
    }
}

export default databaseConnection;
