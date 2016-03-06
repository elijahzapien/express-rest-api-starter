import addUser from './addUser';
import removeUser from './removeUser';
import getSingleUser from './getSingleUser';
import getAllUsers from './getAllUsers';

const userRoutes = {
    add: addUser,
    remove: removeUser,
    getSingle: getSingleUser,
    getAll: getAllUsers
};

export default userRoutes;

