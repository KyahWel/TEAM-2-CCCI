import express, { Express, Response, Request } from "express";
import Users from "../models/users.model";

const userRoute : Express = express()

userRoute.get("/", async (req: Request, res: Response)=>{
    try {
        const response = await Users.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.post("/", async (req: Request, res: Response)=>{
    try {
        res.status(200).json("this is post method")
    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.put("/", async (req: Request, res: Response)=>{
    try {
        res.status(200).json("this is put method")
    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.delete("/", async (req: Request, res: Response)=>{
    try {
        res.status(200).json("this is delete method")
    } catch (error) {
        res.status(500).json(error)
    }
})

export default userRoute