import express, { Express, Response, Request } from "express";
import Users from "../models/users.model";
 
// Create a new Express router instance
const userRoute : Express = express()
 
// GET route to retrieve all users
userRoute.get("/", async (req: Request, res: Response)=>{
    try {
        // Retrieve all users from the database
        const response = await Users.findAll()
        res.status(200).json(response)
    } catch (error) {
        // Handle errors and send a 500 response with the error message
        res.status(500).json(error)
    }
})
 
// POST route to create a new user
userRoute.post("/", async (req: Request, res: Response)=>{
    try {
        // Extract request body
        const {body} = req
        // Create a new user in the database
        const response = await Users.create(body)
        res.status(200).json(response)
    } catch (error) {
        // Handle errors and send a 500 response with the error message
        res.status(500).json(error)
    }
})
 
// PUT route to update an existing user
userRoute.put("/:id", async (req: Request, res: Response)=>{
    try {
        // Extract request body and URL parameters
        const {body, params} = req
        // Update the user with the specified ID in the database
        const response = await Users.update(body, {where: {id: params.id}, returning: true })
        res.status(200).json(response)
    } catch (error) {
        // Handle errors and send a 500 response with the error message
        res.status(500).json(error)
    }
})
 
// DELETE route to delete an existing user
userRoute.delete("/:id", async (req: Request, res: Response)=>{
    try {
        // Extract URL parameters
        const {params} = req
        // Delete the user with the specified ID from the database
        const response = await Users.destroy({where: params})
        res.status(200).json(response)
    } catch (error) {
        // Handle errors and send a 500 response with the error message
        res.status(500).json(error)
    }
})
 
// Export the userRoute router
export default userRoute
