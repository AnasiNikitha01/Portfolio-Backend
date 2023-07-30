import { Schema,model } from "mongoose";
import validator from "validator";


const Message_Schema = new Schema({
    Name:{
        type : String,
        require :true
    },
    Email:{
        type : String,
        validate : validator.isEmail
    },
    Contact :{
        type : String,
        require : true
    },
    Message : {
        type : String,
        require : true
    }
},
{
    timestamps : true
}
)

const Message_Model = model('MessageSchema',Message_Schema);

export default Message_Model;     