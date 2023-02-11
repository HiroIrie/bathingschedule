import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    bathingDay:{
        type:String,
        required:true
    },
    ent:{
        type:Date,
        required:true
    },
    remarks:{
        type:String
    }
});

const User=mongoose.model('User',userSchema);

export default User;