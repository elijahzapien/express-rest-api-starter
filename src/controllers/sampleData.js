import express from 'express';
import bcrypt from 'bcrypt';

import User from 'models/user';
import Foo from 'models/foo';

const SampleDataRouter = express.Router();

/*
 * TESTING PURPOSES ONLY
 * ---------------------
 *
 * sample route to generate some testing data
 *
 */

const sampleUser = new User({
    name: 'Devin',
    email: 'devin@allday.com',
    password: 'tornadowrangler',
    admin: true
});

const sampleFoo = new Foo({
    name: 'Devin'
});

// http://localhost:8080/api/sampleData
SampleDataRouter.route('/sampleData')
    .post((req, res) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(sampleUser.password, salt, (err, hash) => {
                sampleUser.save(err => {
                    if (err) return res.send(err);

                    sampleFoo.save(err => {
                        if (err) return res.send(err);
                        return res.json({
                            success: true,
                            message: 'Sample data created'
                        });
                    });
                });
            });
        });
    });

export default SampleDataRouter;

