
import express from "express";
import { getAllMentors, addMentor } from "../Services/mentor.service.js";
const router = express.Router();

router.get("/", async function (req, res) {
    const result = await getAllMentors();
    response.send(result);
});

router.post("/addMentor", async function (req, res) {
    const data = request.body;
    const result = await addMentor(data);
    response.send(result);
});

export default router;