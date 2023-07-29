// Importing Required Packages
import express from "express";

// Importing TryCatch from utils
import tryCatch from "../utils/tryCatch.js";

// Importing users controllers
import {getSingleUser, getMultipleUser, createUser} from "../controllers/users.js";

// Storing Express Router into route constant
const route = express.Router();

//Setting routes

// GET "/" route to get All Users details
route.get("/", tryCatch(getMultipleUser));

// GET "/single" route to get single Users details
route.get("/single", tryCatch(getSingleUser));

// POST "/create" route to create new User
route.post("/create", tryCatch(createUser));

// Exporting route as default
export default route;