import express, {Express, Response, Request, Application} from "express"
import userRoute from "./routes/users"
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
//import RouterMiddleware from "./middleware/middleware"
dotenv.config();
const port:Number = 3001
const app: Application = express()
app.use(
    cors()
);
app.use(
    bodyParser.json()
);
app.use(
    bodyParser.urlencoded({ extended: true })
);
const start = async (app: Application) => {
app.use(
    express.json()
)
    app.get("/", (req: Request, res: Response)=>{
        try {
            res.status(200).json("Rest API SERVER READY")
        } catch (error) {
            res.status(500).json(error)
        }
    })
    
   // app.use(RouterMiddleware.routerMiddleware)
    app.use("/users", userRoute)
    app.listen(port,()=>{
        console.log(`REST API SERVER READY AT http:localhost:${port}`);
    })
}



start(app)