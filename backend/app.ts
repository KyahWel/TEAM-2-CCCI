import express, {Express, Response, Request, Application} from "express"
import bodyParser from 'body-parser';
import Users from './models/users.model';
import bcrypt from 'bcrypt';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const port:Number = 5005
const app: Application = express()
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));


    app.get("/", (req: Request, res: Response)=>{
        try {
            res.status(200).json("Rest API SERVER READY")
        } catch (error) {
            res.status(500).json(error)
        }
    });

    // display all admins
    app.get("/admins", async (req: Request, res: Response)=>{  
        try {
            const response = await Users.findAll({
              where: {
                iamAdmin: true
              }
            });
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
      });


      // display all users/applicants
      app.get("/users", async (req: Request, res: Response)=>{  
        try {
            const response = await Users.findAll({
              where: {
                iamAdmin: false
              }
            });
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
      });


      // register users
      app.post('/api/users', async (req: Request, res: Response) => {
        try {
          const { firstName, lastName, age,email, password, contactNo,gender,address } = req.body;
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = await Users.create({
            firstName,
            lastName,
            contactNo,
            email,
            age,
            address,
            gender,
            password: hashedPassword,
            iamAdmin: false
          });
          res.status(201).json(user);
        } catch (error) {
          res.status(500).json(error);
        }
      });

      // register admins
      app.post('/api/admins', async (req: Request, res: Response) => {
        try {
          const { firstName, lastName, age,email, password, contactNo } = req.body;
          const hashedPassword = await bcrypt.hash(password, 10);
          const admin = await Users.create({
            firstName,
            lastName,
            contactNo,
            email,
            age,
            password: hashedPassword,
            iamAdmin: true
          });
          res.status(201).json(admin);
        } catch (error) {
          res.status(500).json(error);
        }
      });

   // display all users/applicants
    app.get('/users', async (req, res) => {
  try {
    const users = await Users.findAll({
      where: {
        isAdmin: false
      }
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});


// login for users
app.post('/api/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log('email:', email);
    console.log('password:', password);
    const user = await Users.findOne({ where: { email } });
    
    if (!user) {
      return res.status(401).json();
    }
    if (user.iamAdmin) {
      return res.status(403).json();
    }
    const isValid = await bcrypt.compare(password, user.password);
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


// login for admin
app.post('/api/login-admin', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log('email:', email);
    console.log('password:', password);
    const admin = await Users.findOne({ where: { email } });
    
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



app.listen(port,()=>{
  console.log(`REST API SERVER READY AT http:localhost:${port}`);
});


