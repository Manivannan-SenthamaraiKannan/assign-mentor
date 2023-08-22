import { client } from "../index.js";

export async function getAllStudents() {
    return await client
        .db("studentMentor")
        .collection("student")
        .find({})
        .toArray();
}
export async function addStudent(data) {
    return await client
        .db("studentMentor")
        .collection("student")
        .insertOne(data);
}

export async function assignMentor(data) {
    console.log(data);
    return await client
        .db("studentMentor")
        .collection("student")
        .updateOne({ _id: data.studentId }, { $set: { mentorId: data.mentorId } });
}
export async function assignMentorToMany(data) {
    const { studentIds, mentorId } = data;
    return await client
        .db("studentMentor")
        .collection("student")
        .updateMany({ _id: { $in: studentIds } }, { $set: { mentorId: mentorId } });
}


export async function ChangeMentorForStudent(data) {
    const { studentId, mentorId } = data;
    return await client
        .db("studentMentor")
        .collection("student")
        .updateOne({ _id: studentId }, { $set: { mentorId: mentorId } });
}