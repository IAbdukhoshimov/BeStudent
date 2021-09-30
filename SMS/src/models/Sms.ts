import mongoose, {Schema, Document} from "mongoose"

export interface ISms extends Document{
    _id:string
    name:string
    subject:string
    email:string
    description:string
}

let smsSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
    }
})

export default mongoose.model<ISms>("Sms",smsSchema)