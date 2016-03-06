import User from '../../../models/user';

export default function(req, res, next) {
    User.findOne(
        {email: req.params.user_email},
        (err, user) => {
            if (err) return res.send(err);
            res.json(user);
        }
    );
}

