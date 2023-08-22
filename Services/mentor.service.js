import { client } from '../index.js'

export async function getAllMentors() {
    return await client
        .db("studentMentor")
        .collection("mentor")
        .find({})
        .toArray();
}

export async function addMentor(data) {
    return await client
        .db("studentMentor")
        .collection("mentor")
        .insertOne(data);
}