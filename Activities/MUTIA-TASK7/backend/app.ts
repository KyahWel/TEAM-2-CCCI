import express, { Express, Response, Request, Application } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Users from './models/users.model';


dotenv.config();

const port: number = 5005;
const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json("Rest API SERVER READY");
  } catch (error) {
    res.status(500).json(error);
  }
});

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

// app.get("/users", async (req: Request, res: Response)=>{
//   try {
//       const response = await Users.findAll({
//         where: {
//           isAdmin: false
//         }
//       });
//       res.status(200).json(response);
//   } catch (error) {
//       res.status(500).json(error);
//   }
// });


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
        isAdmin: false
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  });

// app.post('/api/login', async (req: Request, res: Response) => {
//   try {
//     const { username, password } = req.body;
//     const user = await Users.findOne({ where: { username } });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }
//     const isValid = await bcrypt.compare(password, user.password);
//     if (!isValid) {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }
//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

app.post('/api/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('username:', username);
    console.log('password:', password);
    const user = await Users.findOne({ where: { username } });
    console.log('user:', user);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    if (user.isAdmin) {
      return res.status(403).json({ message: 'You do not have permission to log in as a non-admin user' });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    console.log('Login successful');
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Add other routes here (ADMIN)

app.get("/admins", async (req: Request, res: Response)=>{
  try {
      const response = await Users.findAll({
        where: {
          isAdmin: true
        }
      });
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json(error);
  }
});

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
      isAdmin: true
    });
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post('/api/login-admin', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('username:', username);
    console.log('password:', password);
    const admin = await Users.findOne({ where: { username } });
    console.log('admin:', admin);
    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    if (!admin.isAdmin) {
      return res.status(403).json({ message: 'You do not have permission to log in as an admin' });
    }
    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    console.log('Login successful');
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.delete("/admin/:id", async (req: Request, res: Response)=>{
  try {
      const {params: {id}} = req
      const response = await Users.destroy({where: {id}});
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json(error);
  }
});

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});