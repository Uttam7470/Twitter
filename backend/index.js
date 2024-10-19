// import express from 'express'
// import dotenv from 'dotenv'
// import databaseConnection from './config/database.js';
// import cookieParser from 'cookie-parser';
// import userRoute from './routes/userRoute.js'
// import tweetRoute from './routes/tweetRoute.js'
// import cors from 'cors'
// import path from 'path'

// dotenv.config({
//     path : ".env"
// })


// databaseConnection();
// const app = express();

// const _dirname = path.resolve();

// // middleware
 
// app.use(express.urlencoded({
//     extended : true
// }));
// app.use(express.json());
// app.use(cookieParser());

// const corsOptions = {
//     origin : "http://localhost:5173",
//     credentials  : true
// }

// app.use(cors(corsOptions))

// //ApI

// app.use("/api/v1/user" ,userRoute);
// app.use("/api/v1/tweet" ,tweetRoute);

// app.use(express.static(path.join(_dirname, '/Frontend/dist')))
// app.get('*' ,(req,res) =>{
//     res.sendFile(path.resolve(_dirname,"Frontend", "dist", "index.html"))
// })




// app.listen(process.env.PORT, ()=>{
//     console.log(`Server is started at port ${process.env.PORT}`);
    
// })


// import express from 'express';
// import dotenv from 'dotenv';
// import databaseConnection from './config/database.js';
// import cookieParser from 'cookie-parser';
// import userRoute from './routes/userRoute.js';
// import tweetRoute from './routes/tweetRoute.js';
// import cors from 'cors';


// // Load environment variables
// dotenv.config({
//     path: '.env',
// });

// // Initialize database connection
// databaseConnection();

// // Initialize Express app
// const app = express();



// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());

// // CORS configuration
// const corsOptions = {
//     origin: ['http://localhost:5173','https://twitter-ya90.onrender.com'],
//     credentials: true,
// };

// app.use(cors(corsOptions));

// // API routes
// app.use('/api/v1/user', userRoute);
// app.use('/api/v1/tweet', tweetRoute);





// // Start the server
// app.listen(process.env.PORT, () => {
//     console.log(`Server is started at port ${process.env.PORT}`);
// });


import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './config/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';
import tweetRoute from './routes/tweetRoute.js';
import cors from 'cors';

// Load environment variables
dotenv.config({
    path: '.env',
});

// Initialize database connection
databaseConnection();

// Initialize Express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
    origin: ['http://localhost:5173', 'https://dainty-taiyaki-0b0301.netlify.app'], // Include frontend's deployed URL
    credentials: true,  // Allow cookies and credentials
};
app.use(cors(corsOptions));

// API routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/tweet', tweetRoute);

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is started at port ${port}`);
});

