import express, { Express, Response, Request, Application } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Users from './models/users.model';

// import jwt from 'jsonwebtoken';

const nodemailer = require('nodemailer');
const multer = require('multer');

dotenv.config();

const port: number = 5005;
const app: Application = express();
// const jwtSecret = process.env.JWT_SECRET;
// const jwtExpirationTime = process.env.JWT_EXPIRATION_TIME;

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

// ENDPOINT for USERS

//display all users
app.get('/users', async (req: Request, res: Response) => {
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


// register new users
app.post('/api/users', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, username, email, password, contactNo } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if contact number already exists
    const existingUser = await Users.findOne({ where: { contactNo } });
    if (existingUser) {
      return res.status(400).json({ message: 'Contact is Number already taken' });
    }

    // Check if username already exists
    const existingUsername = await Users.findOne({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    // Check if email already exists
    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email is already taken' });
    }

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


// login users
app.post('/api/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('username:', username);
    console.log('password:', password);
    const user = await Users.findOne({ where: { username } });
    console.log('user:', user);
    if (!user) {
      return res.status(404).json();
    }
    if (user.isAdmin) {
      return res.status(403).json();
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      console.log('Invalid password');
      return res.status(401).json();
    }
    console.log('Login successful');
    res.status(200).json({ message: 'Login successful', user: user  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update Users' Info
app.put('/api/user/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser: Users = req.body;

  try {
    // Find the user by ID
    const user = await Users.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user with the new data
    user.firstName = updatedUser.firstName;
    user.lastName = updatedUser.lastName;
    user.email = updatedUser.email;
    await user.save();

    // Return a success response
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update user' });
  }
});

// (ENDPOINT for ADMIN)

//display all users
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

//register new admin
app.post('/api/admins', async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, username,email,contactNo, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if contact number already exists
    const existingContact = await Users.findOne({ where: { contactNo } });
    if (existingContact) {
      return res.status(400).json({ message: 'Contact Number is already taken' });
    }

    // Check if username already exists
    const existingUsername = await Users.findOne({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    // Check if email already exists
    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email is already taken' });
    }

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

//login admin
app.post('/api/login-admin', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('username:', username);
    console.log('password:', password);
    const admin = await Users.findOne({ where: { username } });
    console.log('admin:', admin);
    if (!admin) {
      return res.status(401).json();
    }
    if (!admin.isAdmin) {
      return res.status(403).json();
    }
    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      console.log('Invalid password');
      return res.status(401).json();
    }
    console.log('Login successful');
    res.status(200).json({ message: 'Login successful', admin: admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// delete admin
app.delete("/admin/:id", async (req: Request, res: Response)=>{
  try {
      const {params: {id}} = req
      const response = await Users.destroy({where: {id}});
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json(error);
  }
});


//update admin
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

// Email for verification code
app.post('/api/send-verification-code', async (req: Request, res: Response) => {
  const { email } = req.body;

  // Generate a random verification code
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  // Create a transporter object using Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'talentacqportal@gmail.com',
      pass: 'ofww cxnx uqxr yexa'
    }
  });

  // Define the email message
  const mailOptions = {
    from: 'talentacqportal@gmail.com',
    to: email,
    subject: 'Verification Code',
    text: `Your verification code is: ${verificationCode}. This will no longer work in 30 secs.`
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);

    // Update the user's token in the database
    const user = await Users.findOne({ where: { email } });
    if (user) {
      user.code = verificationCode;
      user.codeExpiresAt = new Date(Date.now() + 30 * 1000);
      await user.save();
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

// Check email
app.post('/api/check-email', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const existingEmail = await Users.findOne({ where: { email } });
    if (existingEmail) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//Verify code
app.post('/api/verify-code', async (req: Request, res: Response) => {
  const { code } = req.body;
  const user = await Users.findOne({ where: { code } });

  if (user) {
    const now = Date.now();
    if (now <= user.codeExpiresAt.getTime()) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Verification code has expired' });
    }
  } else {
    res.json({ success: false, message: 'Invalid verification code' });
  }
});

//Verify the username
app.get('/api/users/:username', async (req: Request, res: Response) => {
  const username = req.params.username;
  const user = await Users.findOne({ where: { username } }); // Replace with your database query
  if (user) {
    res.json({ exists: true });
  } else {
    res.json({ exists: false });
  }
});


//UPDATE PASSWORD
app.put('/api/reset-password', async (req: Request, res: Response) => {
  const { username, password} = req.body;
  const user = await Users.findOne({ where: { username } }); // Replace with your database query
  if (user) {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the new password
    user.password = hashedPassword; // Update the user's password with the hashed password
    await user.save(); // Save the changes to the database
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: 'User not found' });
  }
});

// //UPLOAD PICTURE
// const upload = multer({ dest: 'uploads/' });
// const requireUser = (req: CustomRequest, res: Response, next: NextFunction) => {
//   if (!req.user) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }
//   next();
// };

// app.post('/api/upload', requireUser, upload.single('avatar'), async (req: Request, res: Response) => {
//   try {
//     // Get the user from the database using the user ID from the request
//     const user = await Users.findOne(req.user.id);

//     // Update the user data with the new image URL
//     user.avatar = req.file.path;
//     await user.save();

//     // Return the new image URL in the response
//     res.json({ avatar: user.avatar });
//   } catch (error) {
//     // Handle errors
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});