import { debugMiddleware } from '../debug';

import UserModel from '../models/user';
import userMiddleware from './user';

import { routerUnprotected, routerProtected } from '../router';
import barMiddleware from './bar';
import jwtMiddleware from './jwt';

export default function() {

    // log start
    debugMiddleware('Adding middleware');

    // ROUTER
    // ------
    // unprotected
    routerUnprotected.use(barMiddleware);

    // protected
    routerProtected.use(jwtMiddleware);

    // MODEL
    // -----
    //UserModel.schema.pre('save', userMiddleware);

    // log complete
    debugMiddleware('All middleware added');

}

