import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://rishisheth19:8dn2PwXnUrWqqaMU@cluster0.ae8uz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api", authRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
