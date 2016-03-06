/*
 * Example Middleware
 * (express middleware)
 * --------------------
 * Logs on execution
 */

export default function(req, res, next) {
    console.log('Bar middleware triggered');
    next();
}

