import bcrypt from 'bcrypt';
import User from 'models/user';

export default function(req, res, next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
                admin: req.body.admin
            });

            user.save(err => {
                if (err)
                    return res.send({
                        success: false,
                        message: err.toString()
                    });

                return res.json({ message: 'User created' });
            });
        });
    });
}

