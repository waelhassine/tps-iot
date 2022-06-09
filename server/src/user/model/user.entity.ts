import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const User=new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},

})
