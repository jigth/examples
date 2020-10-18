const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true
    }
});

userSchema.methods.encryptPassword = (password) => {
    const encryptedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    return encryptedPassword;
};

userSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = model('user', userSchema);