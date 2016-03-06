import User from '../../../models/user';

export default function(req, res, next) {
    User.remove(
        { email: req.params.user_email },
        (err, user) => {
            if (err) return res.send(err);
            res.json({ message: 'User successfully deleted' });
        }
    );
}
