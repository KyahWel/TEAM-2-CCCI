import express, { Express, Response, Request } from "express";
import Users from "../models/users.model";

const userRoute : Express = express()

userRoute.post("/", async (req: Request, res: Response)=>{
    try {
        const { body } = req
        console.log('body :>>', body);
        const response = await Users.create(body)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})







export default userRoute