// Importing Required Packages
import config from "config";
import mongoose from "mongoose";

// Importing Schemas
import UserSchema from "./Schema/Users.js";
import TeamSchema from "./Schema/Team.js";

// DB connection String
const uri = `mongodb+srv://${config.get("DB.user")}:${config.get("DB.password")}@${config.get("DB.host")}/${config.get("DB.name")}?retryWrites=true&w=majority`;

try {
    // DB Connection
    await mongoose.connect(uri);
    console.log("connection successful");

} catch (error) {
    console.log(error.message);
}

// Creating Collection for the Schemas
export const Users = mongoose.model("Users", UserSchema, "Users");
export const Team = mongoose.model("Team", TeamSchema, "Team");