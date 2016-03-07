import express from 'express';
import { debugController } from '../debug';

import authenticationMiddleware from 'middleware/authentication';

import authenticationController from 'controllers/authentication';
import userController from 'controllers/user';
import fooController from 'controllers/foo';
import sampleDataController from 'controllers/sampleData';

const UnprotectedRouter = express.Router();
const ProtectedRouter = express.Router();

debugController('Adding Controllers');

//
// PROTECTED
// ---------
ProtectedRouter.use(authenticationMiddleware);
ProtectedRouter.use(userController);

//
// UNPROTECTED
// -----------
UnprotectedRouter.use(authenticationController);
UnprotectedRouter.use(fooController);
UnprotectedRouter.use(sampleDataController);

UnprotectedRouter.get('/', (req, res) => {
    res.json({ version: '0.0.1' });
});

debugController('All Controllers Added');

export { UnprotectedRouter, ProtectedRouter };

