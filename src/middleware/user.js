import UserModel from 'models/user';

/*
 * Unique User Verification
 * (Mongoose pre 'save' middleware)
 * --------------------------------
 * Verify new user email is unique
 */

export default function(next) {
    UserModel.find(
        {email: this.email},
        (err, docs) => {
            // no match found. continue with save
            if (!docs.length) return next();

            // user already exists. return error
            return next( new Error('User already exists') );
        }
    );
}

