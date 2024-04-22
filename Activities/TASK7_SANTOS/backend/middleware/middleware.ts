import {Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'

dotenv.config()

export default class RouterMiddleware{
    static routerMiddleware(req: Request, res: Response, next: NextFunction){
        try {
            const type = req.method
            console.log(`[${type}] : ${req.url}`);
            const bearerToken: string[] = (req.headers.authorization || "").split(" ")
            console.log('bearerToken :>> ', process.env.ACCESS_TOKEN);
            if(bearerToken.length && bearerToken[0] == "Bearer"){
                if(bearerToken[1] === process.env.ACCESS_TOKEN){
                    console.log('Authorized Request');
                }else{
                    return res.status(401).json({message: "Invalid token"})
                }
                return next()
            }else{
                return res.status(401).json({message: "Invalid token"})
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}