import config from "config";
import mongoose from "mongoose";
import tryCatch from "../utils/tryCatch.js";

const schema = mongoose.Schema;
const uri = `mongodb+srv://${config.get("DB.user")}:${config.get("DB.password")}@${config.get("DB.host")}/${config.get("DB.name")}?retryWrites=true&w=majority`;

const conn = async () => {
    try {
        await mongoose.connect(uri);
        console.log("connection successful");

    } catch (error) {
        console.log(error.message);
    }
}

conn();


// mongoose.connection.on('connected', function () {  
    // console.log('Mongoose default connection open to ' + uri);
//   });
  
//   // If the connection throws an error
//   mongoose.connection.on('error',function (err) {  
//     console.log('Mongoose default connection error: ' + err);
//   });
  
//   // When the connection is disconnected
//   mongoose.connection.on('disconnected', function () {  
//     console.log('Mongoose default connection disconnected'); 
//   });
  
//   // If the Node process ends, close the Mongoose connection 
//   process.on('SIGINT', function() {  
//     mongoose.connection.close(function () { 
//       console.log('Mongoose default connection disconnected through app termination'); 
//       process.exit(0); 
//     });
//   });
  

const UsersSchema = new schema({
    name: { type: String },
    email: { type: String, unique: true },
    phone: { type: Number, unique: true },
    password: { type: String }
})

const users = mongoose.model("users", UsersSchema, "users");
export default users;