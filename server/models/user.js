const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {ENCRYPT_SALT_ROUNDS} = require('../constants');

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


userSchema.pre('save', function (next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user && !user.isModified('password')) return next();

    bcrypt.hash(user.password, ENCRYPT_SALT_ROUNDS, function(err, hash) {
        user.password = hash;
        next();
    })
});

userSchema.pre('find', function(next) {
    console.log(this)
    console.log('running parent schema pre hook');
    next();
});

userSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        const {password, ...other} = ret;
        return {
            ...other,
        }
    },
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = model('User', userSchema);


module.exports = User;
