// server.ts
import express, { Express } from "express";
import { urlencoded, json } from "body-parser";
import { userRoute } from "./routes/users"; // Example route file

const app: Express = express();
const PORT: number | string = process.env.PORT || 3000;

// Middleware
app.use(urlencoded({ extended: true }));
app.use(json());

// Routes
app.use('/api/users', userRoute); // Example route for todos

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
