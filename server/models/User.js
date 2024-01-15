import mongoose from "mongoose";

const UserShema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 50
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 2
        },
        picturePath: {
            type: String,
            default: " "
        },
        friends: {
            type: Array,
            default: []
        },
        viewedProfile: Number,
        impressions: Number
    }, 
    {timestamps: true}
)

const User = mongoose.model('User', UserShema)
export default User