import express, {Express, Response, Request, Application} from "express"
import userRoute from "./routes/users"
// import RouterMiddleware from "./middleware/middleware"
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { Sequelize } from "sequelize";
import cors from "cors";
import users from './models/users.models';
import bcrypt from 'bcrypt';

dotenv.config();

const port:Number = 5005
const app: Application = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
// app.use(RouterMiddleware.routerMiddleware)
app.use("/users", userRoute)
app.listen(port,()=>{
    console.log(`REST API SERVER READY AT http:localhost:${port}`);
})

const start = async (app: Application) => { 

  app.get("/applicants", async (req: Request, res: Response)=>{
    try {
        const response = await users.findAll({
          where: {
            iamAdmin: false
          }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
  });


    app.post('/api/users', async (req: Request, res: Response) => {
        try {
          const { firstName, middleName, lastName, email, contactNo, city, state, username, password } = req.body;
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = await users.create({
            firstName,
            middleName,
            lastName,
            email,
            contactNo,
            city,
            state,
            username,
            password: hashedPassword,
            iamAdmin: false,
          });
          res.status(201).json(user);
        } catch (error) {
          res.status(500).json(error);
        }
      });

      
app.post('/api/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('username:', username);
    console.log('password:', password);
    const user = await users.findOne({ where: { username } });
    console.log('user:', user);
    if (!user) {
      return res.status(401).json({ message: 'Invalid Username' });
    }
    if (user.iamAdmin) {
      return res.status(403).json({ message: 'Return to Landing Page and select Admin' });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    console.log('Login Success');
    res.status(200).json({ message: 'Login Success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/adminLogin', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('username:', username);
    console.log('password:', password);
    const user = await users.findOne({ where: { username } });
    console.log('user:', user);
    if (!user) {
      return res.status(401).json({ message: 'Invalid Username' });
    }
    if (!user.iamAdmin) {
      return res.status(403).json({ message: 'Return to Landing Page and select Applicant' });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    console.log('Login Success');
    res.status(200).json({ message: 'Login Success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get("/admins", async (req: Request, res: Response)=>{
  try {
      const response = await users.findAll({
        where: {
          iamAdmin: true
        }
      });
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json(error);
  }
});

app.put("/admin/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedUserData = req.body;
    const response = await users.update(updatedUserData, {
      where: { id },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.delete("/admin/:id", async (req: Request, res: Response)=>{
  try {
      const {params: {id}} = req
      const response = await users.destroy({where: {id}});
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json(error);
  }
});

}

app.post('/api/adminRegister', async (req: Request, res: Response) => {
  try {
    const { firstName, middleName, lastName, email, contactNo, city, state, username, password, previousCompanyName} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await users.create({
      firstName,
      middleName,
      lastName,
      email,
      contactNo,
      city,
      state,
      username,
      password: hashedPassword,
      iamAdmin: true,
      previousCompanyName,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});



start(app)