import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from 'models/user';

const AuthenticationRouter = express.Router();

AuthenticationRouter.route('/authenticate')
    .post((req, res, next) => {
        User.findOne(
            { email: req.body.email },
            (err, user) => {
                // check for response errors
                if (err) throw err;

                // check if user exists
                if (!user) return res.json({ success: false, message: 'Authentication failed. User not found.' });

                bcrypt.compare(req.body.password, user.password, (bcryptErr, bcryptVerified) => {
                    // check for bcrypt errors
                    if (bcryptErr) return res.send(bcryptErr);

                    // check if password matches
                    if (!bcryptVerified) return res.json({ success: false, message: 'Authentication failed. Wrong password.' });

                    //
                    // user is found and password is verified
                    // ----------

                    // exclude password
                    const tempUser = {
                        name: user.name,
                        email: user.email,
                        admin: user.admin
                    };

                    // create token
                    const token = jwt.sign(
                        tempUser,
                        req.app.get('tokenSecret'),
                        { expiresIn: 3600 } // 1 hour
                    );

                    // return success and token
                    res.json({
                        success: true,
                        message: 'Authentication succeded. Heres your token',
                        token: token
                    });
                });
            }
        );
    });

export default AuthenticationRouter;

