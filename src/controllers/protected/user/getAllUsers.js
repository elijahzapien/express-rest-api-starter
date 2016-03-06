import User from '../../../models/user';

export default function(req, res, next) {
    User.find((err, users) => {
        if (err) return res.send(err);
        res.json(users);
    });
}

