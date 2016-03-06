import { routerProtected } from '../../router';

import addUser from './user/addUser';
import removeUser from './user/removeUser';
import getAllUsers from './user/getAllUsers';
import getSingleUser from './user/getSingleUser';

export default function() {
    // USER
    // ----
    // collection
    routerProtected.route('/users')
        .post(addUser)
        .get(getAllUsers);

    // single documents
    routerProtected.route('/users/:user_email')
        .get(getSingleUser)
        .delete(removeUser);
}

