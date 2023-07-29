// Importing Required Packages
import config from "config";
import express from "express";
import bodyParser from "body-parser";

// Importing Error Handler middleware
import errorHandler from "./middleware/errorHandler.js";

// Importing Routers
import usersRouter from "./routers/users.js";

// Storing Express into app constant
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


//Setting all Routes
app.use('/', usersRouter);

//For Error handling
app.use(errorHandler);

//Setting server Port
app.listen(config.get("App.port"), () => {
    console.log(`Server is running at http://${config.get("App.host")}:${config.get("App.port")}`);
});