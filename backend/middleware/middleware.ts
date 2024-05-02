import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

// Define a class for router middleware
export default class RouterMiddleware {
    // Define static method for router middleware
    static routerMiddleware(req: Request, res: Response, next: NextFunction) {
        try {
            // Extract HTTP request type (GET, POST, etc.) and URL
            const type = req.method
            console.log(`[${type}] : ${req.url}`);

            // Extract bearer token from authorization header
            const bearerToken: string[] = (req.headers.authorization || "").split(" ")
            console.log('bearerToken :>> ', process.env.ACCESS_TOKEN);

            // Check if bearer token exists and matches the expected access token
            if (bearerToken.length && bearerToken[0] == "Bearer") {
                if (bearerToken[1] === process.env.ACCESS_TOKEN) {
                    // Token is valid
                    console.log('Authorized Request');
                } else {
                    // Return 401 Unauthorized if token is invalid
                    return res.status(401).json({ message: "Invalid token" })
                }
                // Continue to the next middleware if token is valid
                return next()
            } else {
                // Return 401 Unauthorized if no token is provided
                return res.status(401).json({ message: "Invalid token" })
            }
        } catch (error) {
            // Return 500 Internal Server Error for any unexpected errors
            res.status(500).json(error)
        }
    }
}
