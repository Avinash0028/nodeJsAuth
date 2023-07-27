// Importing Required Packages
import express from "express";

// Importing TryCatch from utils
import tryCatch from "../utils/tryCatch.js";

// Importing users controllers
import {getSingleUser, getMultipleUser} from "../controllers/users.js";

// Storing Express Router into route constant
const route = express.Router();

//Setting routes

// GET "/" route to get All Users details
route.get("/", tryCatch(getMultipleUser));

// GET "/single" route to get single Users details
route.get("/single", tryCatch(getSingleUser));

// Exporting route as default
export default route;