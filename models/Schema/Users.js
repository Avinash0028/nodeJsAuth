import mongoose from "mongoose";
const schema = mongoose.Schema;

const UsersSchema = new schema({
    name: { type: String },
    email: { type: String, unique: true },
    phone: { type: Number, unique: true },
    password: { type: String }
});

export default UsersSchema;