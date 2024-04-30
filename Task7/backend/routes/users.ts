import express, { Express, Response, Request } from "express";
import Users from "../models/users.model";
const bcrypt = require('bcrypt');
const userRoute : Express = express()
const jwt = require('jsonwebtoken');

userRoute.get("/", async (req: Request, res: Response)=>{
    try {
        const response = await Users.findAll();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})
userRoute.get("/userprof", async (req: Request, res: Response)=>{
    try {
        const response = await Users.findAll({
            where: {
              accountType: 'User'
            }
          });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.get("/admin", async (req: Request, res: Response)=>{
    try {
        const response = await Users.findAll({
            where: {
              accountType: 'Admin'
            }
          });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.post("/register", async (req: Request, res: Response)=>{
    try {
        const { accountType, firstName, lastName, middleName,email,username, password  } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const response = await Users.create({
            accountType,
            firstName,
            lastName,
            middleName,
            email,
            username,
            password: hashedPassword
            
          });
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.post("/login", async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        // Find the user in the database by username
        const user = await Users.findOne({ where:{
            username
        } });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Check if the entered password matches the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Check the account type to restrict access
        if (user.accountType !== 'Admin') {
            return res.status(200).json({ message: "User login successful.", user });
        }

        // Password is correct and account type is Admin, so proceed with login
        res.status(200).json({ message: "Admin login successful.", user });
    } catch (error) {
        res.status(500).json({ message: "An error occurred during login", error });
    }
});
  

userRoute.put("/:id", async (req: Request, res: Response)=>{
    try {
       
        const { body, params } = req

        console.log('body :>>', body);
        console.log ('params :>>', params);

        const response = await Users.update(body, { where: params })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.delete("/:id", async (req: Request, res: Response)=>{
    try {
        const params = req.params
        const response = await Users.destroy({where: params})
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default userRoute