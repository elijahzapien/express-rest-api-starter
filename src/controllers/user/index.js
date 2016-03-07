import express from 'express';

import addUser from 'controllers/user/addUser';
import removeUser from 'controllers/user/removeUser';
import getSingleUser from 'controllers/user/getSingleUser';
import getAllUsers from 'controllers/user/getAllUsers';

const UserRouter = express.Router();

/*
 * USER
 * ----
 *
 * /api/users - GET - Get all users
 * /api/users - POST - Create a user
 * /api/users/:user_email - GET - Get a single user
 * /api/users/:user_email - DELETE - Delete a single user
 *
 */

// collection
UserRouter.route('/users')
    .post(addUser)
    .get(getAllUsers);

// documents
UserRouter.route('/users/:user_email')
    .get(getSingleUser)
    .delete(removeUser);

export default UserRouter;

