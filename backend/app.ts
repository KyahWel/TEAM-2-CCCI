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
          // Display all users
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

            // Registration of Users
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


          // Log in of users
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
            return res.status(401).json();
          }
          console.log('Login successful');
          res.status(200).json({message: 'Login successful'});
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      });


      // Login for admin
      app.post('/api/admin-login', async (req: Request, res: Response) => {
        try {
          const { username, password } = req.body;
          console.log('username:', username);
          console.log('password:', password);
          const admin = await Users.findOne({ where: { username } });
          console.log('admin:', admin);
          if (!admin) {
            return res.status(401).json();
          }
          if (!admin.iamAdmin) {
            return res.status(403).json();
          }
          const isValid = await bcrypt.compare(password, admin.password);
          if (!isValid) {
            console.log('Invalid password');
            return res.status(401).json();
          }
          console.log('Login successful');
          res.status(200).json({ message: 'Login successful' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      });

        // Register Admin
        app.post('/api/admins', async (req: Request, res: Response) => {
          try {
            const { firstName, lastName, username,email,contactNo, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
        
        
            const admin = await Users.create({
              firstName,
              lastName,
              username,
              contactNo,
              email,
              password: hashedPassword,
              iamAdmin: true
            });
            res.status(201).json(admin);
          } catch (error) {
            res.status(500).json(error);
          }
        });

        //Delete for admin
        app.delete("/admin/:id", async (req: Request, res: Response)=>{
          try {
              const {params: {id}} = req
              const response = await Users.destroy({where: {id}});
              res.status(200).json(response);
          } catch (error) {
              res.status(500).json(error);
          }
        });

        //Update for admin
        app.put("/admin/:id", async (req: Request, res: Response) => {
          try {
            const { id } = req.params;
            const updatedUserData = req.body;
            const response = await Users.update(updatedUserData, {
              where: { id },
            });
            res.status(200).json(response);
          } catch (error) {
            res.status(500).json(error);
          }
        });

    // Start the server and listen on the specified port
    app.listen(port, () => {
        console.log(`REST API SERVER READY AT http://localhost:${port}`);
    });

