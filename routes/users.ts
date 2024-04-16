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
        const { body } = req
        console.log('body :>>', body);
        const response = await Users.create(body)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.put("/:id", async (req: Request, res: Response)=>{
    try {
       
        const { body, params } = req

        console.log('body :>>', body);
        console.log ('params :>>', params);

        const response = await Users.update(body, { where: params })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.delete("/:id", async (req: Request, res: Response)=>{
    try {
        const params = req.params
        const response = await Users.destroy({where: params})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default userRoute