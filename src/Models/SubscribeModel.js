import mongoose from "mongoose";
import validator from 'validator';
import { ErrorHandler } from "nodejs-corekit";

const SubscribeSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate: (value) => {
            if (!validator.isEmail(value)) {
                throw new ErrorHandler("Email is not in proper formate !", 422);
            }
        }

    }
},{timestamps:true});

const SubscribeModel =  mongoose.models.Subscribe || new mongoose.model("Subscribe",SubscribeSchema);

export default SubscribeModel;