const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    admin: Boolean
});

const UserModel = mongoose.model('User', UserSchema);

/*
 * TODO
 * ----
 * move pre check to middleware folder? (middleware/users.js)
 */

// pre-save middleware
UserSchema.pre('save', function(next) {
    UserModel.find(
        {email: this.email},
        (err, docs) => {
            // no matching document found
            // continue with save
            if (!docs.length) return next();

            // user already exists
            // do not save
            return next( new Error('User already exists') );
        }
    );
});

export default UserModel;

