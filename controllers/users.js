// Importing Models
import { Users } from "../models/connection.js";


export var getSingleUser = async (req, res) => {
    res.status(200).json({ success: true, message: "get Single User from users route" });
}

export var getMultipleUser = async (req, res) => {
    if (!Users) {
        throw new Error("User not found");
    }
    const allUsers = await Users.find();
    res.status(200).json({ success: true, message: allUsers });
    console.table(allUsers);
}

export var createUser = async (req, res) => {
    const { name, email, phone, password } = req.body;
    const newUser = { name, email, phone, password };

    const saveNewUser = await new Users(newUser).save();

    res.status(200).json({ success: true, message: "New User", data: newUser });
    console.table(saveNewUser);
}