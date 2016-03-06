import express from 'express';

import userController from 'controllers/user';
import fooController from 'controllers/foo';
import sampleDataController from 'controllers/sampleData';

const UnprotectedRouter = express.Router();
const ProtectedRouter = express.Router();

//router.use('/animals', require('./animals'));
//router.use('/cars', require('./cars'));

//
// PROTECTED
// ---------

//
// UNPROTECTED
// -----------
UnprotectedRouter.use(userController);
UnprotectedRouter.use(fooController);
UnprotectedRouter.use(sampleDataController);

UnprotectedRouter.get('/', (req, res) => {
    res.json({ version: '0.0.1' });
});

export default UnprotectedRouter;

