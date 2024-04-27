import express, { Express, Response, Request, Application } from "express";
import Users from './models/users.model';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();
const port: number = 5005; // Define the port number
const app: Application = express(); // Create an Express application instance

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


    // Handle GET request for the root URL
    app.get("/", (req: Request, res: Response) => {
        try {
            // Send a response with status 200 and a message
            res.status(200).json("Rest API SERVER READY");
        } catch (error) {
            // Handle errors and send a response with status 500
            res.status(500).json(error);
        }
    });
    
    app.get('/users', async (req, res) => {
        try {
          const users = await Users.findAll({
            where:{
                iamAdmin: false
            }
          });
          res.json(users);
        } catch (error) {

          console.error(error);
          res.status(500).json({ message: 'Error fetching users' });
        }
      });

      app.post('/api/users', async (req: Request, res: Response) => {
        try {
          const { firstName, lastName, username,email, password, contactNo } = req.body;
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = await Users.create({
            firstName,
            lastName,
            username,
            contactNo,
            email,
            password: hashedPassword,
            iamAdmin: false
            
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
          const user = await Users.findOne({ where: { username } });
            console.log('user:',user);
          if (!user) {
            return res.status(401).json({message: 'Invalid'});
          }
          if (user.iamAdmin) {
            return res.status(403).json({message: 'Invalid'});
          }
          const isValid = await bcrypt.compare(password, user.password);
          if (!isValid) {
            console.log('Invalid password');
            return res.status(401).json({message: 'invalid'});
          }
          console.log('Login successful');
          res.status(200).json({message: 'success'});
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      });

    // Start the server and listen on the specified port
    app.listen(port, () => {
        console.log(`REST API SERVER READY AT http://localhost:${port}`);
    });

