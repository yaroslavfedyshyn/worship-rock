const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const userSchema = new Schema({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    });


const User = model('User', userSchema);


module.exports = User;
