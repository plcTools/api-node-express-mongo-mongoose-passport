const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String
});

//Encrypt the pass when inserting it into the DB
userSchema.methods.encryptPassword = (password) => {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
//compare the saved password with the password insert and return true or false
userSchema.methods.comparePassword = function (password) {
   return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('users', userSchema);