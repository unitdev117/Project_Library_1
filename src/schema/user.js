import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true, "Email is required"],
        unique :  [true, "Email must be unique"],
        uniqueCaseInsensitive : true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },
    password : {
        type : String,
        required : [true, "Password is required"]
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username must be unique"],
        uniqueCaseInsensitive: true,
        match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'],
    },
    avatar:{
        type: String
    }

}, {timestamp: true});

userSchema.pre('save', function saveUser(next) { // Fixed syntax error in function definition
    const user = this;
    user.avatar = `https://robohash.org/${user.username}`; 
    next();
});

const User = mongoose.model('User', userSchema);

export default User;