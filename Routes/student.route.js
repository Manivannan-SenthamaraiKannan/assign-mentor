import express from "express";
import { ObjectId } from "mongodb";
import {
    getAllStudents,
    addStudent,
    assignMentor,
    assignMentorToMany,
    ChangeMentorForStudent
} from "../Services/student.service.js";
const router = express.Router();

router.get("/", async function (req, res) {
    const result = await getAllStudents();
    res.send(result);
});



router.post("/addStudent", async function (req, res) {
    const data = req.body;
    console.log(data);
    const result = await addStudent(data);
    res.send(result);
});
router.post("/assignMentor", async function (req, res) {
    const { studentId, mentorId } = req.body;

    const result = await assignMentor({
        studentId: ObjectId(studentId),
        mentorId: ObjectId(mentorId),
    });
    res.send(result);
});
router.post("/assignMentorToMany", async function (req, res) {
    const { studentIds, mentorId } = req.body;
    const studentObjectIds = studentIds.map((studentId) => ObjectId(studentId));
    console.log(studentObjectIds)
    const result = await assignMentorToMany({
        studentIds: studentObjectIds,
        mentorId: ObjectId(mentorId),
    });
    res.send(result);
});



router.put("/changementor/:id", async function (req, res) {
    const { id } = req.params;
    const { mentorId } = req.body;
    const result = await ChangeMentorForStudent({
        studentId: ObjectId(id),
        mentorId: ObjectId(mentorId),
    });
    res.send(result);
});

export default router;