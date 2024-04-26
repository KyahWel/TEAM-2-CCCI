import express, {Express, Response, Request, Application} from "express"
import userRoute from "./routes/users"
import RouterMiddleware from "./middleware/middleware"
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { Sequelize } from "sequelize";
import cors from "cors";
import users from './models/users.models';
dotenv.config();

const port:Number = 5005
const app: Application = express()
app.use(bodyParser.json());

const start = async (app: Application) => {

    app.get("/users", async (req: Request, res: Response)=>{
        try {
            const response = await users.findAll({
            });
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
      });
      

    app.use(cors())
    app.use(RouterMiddleware.routerMiddleware)
    app.use("/users", userRoute)
    app.listen(port,()=>{
        console.log(`REST API SERVER READY AT http:localhost:${port}`);
    })
}



start(app)