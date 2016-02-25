const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    admin: Boolean
});

const UserModel = mongoose.model('User', UserSchema);

// pre-save middleware
UserSchema.pre('save', function(next) {
    UserModel.find({email: this.email}, (err, docs) => {
        // no matching document found
        // continue with save
        if (!docs.length) return next();

        // match found
        // user already exists
        return next( new Error('User already exists!') );
    });
});

export default UserModel;

