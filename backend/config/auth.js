// import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'

// dotenv.config({
//     path : "../config/.env"
// })
// const isAuthenticated = async(req,res,next) =>{
//     try{
//         const token = req.cookies.token;
//         console.log(token);

//         if(!token){
//             return res.status(401).json({
//                 message : "User not authenticated.",
//                 success : false
//             })
//         }

//         const decode = jwt.verify(token, process.env.SECRET_TOKEN)
//         console.log(decode);
//         req.user = decode.userId; 
//         next();
//     }
//     catch(error){
//         console.log(error);
        
//     }
// }

// export default isAuthenticated;


import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config(); // Automatically reads from `.env` in the project root

const isAuthenticated = async (req, res, next) => {
    try {
        // Retrieve the token from cookies
        const token = req.cookies.token;
        console.log("Token received:", token);

        // If no token is found, respond with 401 Unauthorized
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated. No token provided.",
                success: false
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
        console.log("Decoded Token:", decoded);

        // Attach the decoded user ID to the request object for use in next middleware
        req.user = decoded.userId;

        // Proceed to the next middleware
        next();
    } catch (error) {
        console.error("Authentication error:", error.message);

        // Handle token verification error and send a response
        return res.status(401).json({
            message: "Invalid or expired token.",
            success: false
        });
    }
};

export default isAuthenticated;
