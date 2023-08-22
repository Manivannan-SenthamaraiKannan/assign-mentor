import express from "express";
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";
import cors from "cors";

// Routes
import studentRouter from "./Routes/student.route.js";
import mentorRouter from "./Routes/mentor.route.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

// Port
const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;

//MongoDB connection
export const client = new MongoClient(MONGO_URL);
client.connect();
console.log("mongoDB connected");

app.get("/", (req, res) => {
    res.send("<h1>Assigning Students with Mentors<h1/>");
});

app.use("/students", studentRouter);
app.use("/mentors", mentorRouter);

app.listen(PORT, () =>
    console.log("http:\\localhost:", PORT)
);