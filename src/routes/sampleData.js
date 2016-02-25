import bcrypt from 'bcrypt';
import User from '../models/user';
import Foo from '../models/foo';

/*
 * TESTING PURPOSES ONLY
 * ---------------------
 *
 * sample route to generate some testing data
 *
 */

export default function(router) {

    const sampleUser = {
        name: 'Devin',
        email: 'devin@allday.com',
        password: 'tornadowrangler',
        admin: true
    };

    const sampleFoo = new Foo({
        name: 'Devin'
    });

    // http://localhost:8080/api/sampleData
    router.route('/sampleData')
        .post((req, res) => {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(sampleUser.password, salt, (err, hash) => {
                    const user = new User();
                    user.name = sampleUser.name;
                    user.email = sampleUser.email;
                    user.password = hash;
                    user.admin = sampleUser.admin;

                    user.save(err => {
                        if (err) res.send(err);

                        sampleFoo.save(err => {
                            if (err) res.send(err);
                            res.json({ message: 'SampleData created!' });
                        });
                    });
                });
            });
        });

}


