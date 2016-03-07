import jwt from 'jsonwebtoken';

/*
 * Token Verification
 * (express middleware)
 * --------------------
 * Verify request contains valid token
 */

export default function(req, res, next) {
    // check token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token)
        // no token. return forbidden
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    // verify token
    jwt.verify(token, req.app.get('tokenSecret'), (err, decoded) => {
        if (err)
            // error authenticating token. return forbidden
            return res.status(403).send({
                success: false,
                message: 'Failed to authenticate token.'
            });

        // verified. continue, and save to request for use in other routes
        req.decoded = decoded;
        return next();
    });
}

