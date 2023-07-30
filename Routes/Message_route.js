import express from 'express';
import Message_Model from '../Models/Message_model.js';

const Messages = express.Router();

Messages.post('/messages',async(req,res)=>{
    const {Name,Email,Contact,Message} = req.body;
    console.log(Name,Message);
     try {

        const Message_post = await Message_Model.create({
            Name,
            Email,
            Contact,
            Message
        })

        if(Message_post){
            res.status(201).json(Message_post);
            console.log(Message_post);
        }else{
            console.log("Cannot Post data");
            res.status(400).json("Post failed");
        }
        
     } catch (error) {
        console.log(`error in message route ${error}`);
     }
})

export default Messages;