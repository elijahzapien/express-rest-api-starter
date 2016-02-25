import bcrypt from 'bcrypt';
import User from '../models/user';

/*
 * USER ROUTES
 * ----------
 *
 * /api/users - GET - Get all users
 * /api/users - POST - Create a users
 * /api/users/:user_id - GET - Get a single user
 * /api/users/:users_id - DELETE - Delete a single user
 *
 */

/*
 * TODO
 * ----
 *
 * Add JWT authentication
 */

export default function(router) {

    // collection
    router.route('/users')
        .post((req, res) => {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    const user = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: hash,
                        admin: req.body.admin
                    });

                    user.save(err => {
                        if (err) return res.send(err);
                        res.json({ message: 'User created' });
                    });
                });
            });
        })
        .get((req, res) => {
            User.find((err, users) => {
                if (err) return res.send(err);
                res.json(users);
            });
        });

    // single documents
    router.route('/users/:user_email')
        .get((req, res) => {
            User.findById(req.params.user_email, (err, user) => {
                if (err) return res.send(err);
                res.json(user);
            });
        })
        .delete((req, res) => {
            User.remove(
                { email: req.params.user_email },
                (err, user) => {
                    if (err) return res.send(err);
                    res.json({ message: 'User successfully deleted' });
                }
            );
        });

}

