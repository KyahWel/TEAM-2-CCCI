import express, { Express, Response, Request } from "express";
import Users from "../models/users.model";

const userRoute : Express = express()
//to get the data from data base
userRoute.get("/", async (req: Request, res: Response)=>{
    try {
        const response = await Users.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})


// to create data from data base
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

// to update the data from data base 
userRoute.put("/:id", async (req: Request, res: Response)=>{
    try {
        const { body, params } = req
        console.log('body :>>', body);
        console.log('params :>>', body);

        const response = await Users.update(body , { where: params })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})
// to delete/destroy data from database
userRoute.delete("/:id", async (req: Request, res: Response)=>{
    try {
        const params = req.params
        const response = await Users.destroy({ where: params })

        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default userRoute