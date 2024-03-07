import mongoose from "mongoose";
import validator from "validator";
import { ErrorHandler } from "nodejs-corekit";

const ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        validate:(value) => {
            if(!validator.isEmail(value)){
                return new ErrorHandler("Invalid Email Address",400);
            }
        }
    } ,
    subject:{
        type:String,
        required:true,
        trim:true
    },
    message:{
        type:String,
        required:true,
        trim:true
    }

},{timestamps:true});


const ContactModel = mongoose.models.Contact || new mongoose.model("Contact",ContactSchema);

export default ContactModel;

