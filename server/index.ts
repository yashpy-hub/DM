import express from "express";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Example API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the serverless API!" });
});

// Export the app for Vercel Serverless Functions
export default app;