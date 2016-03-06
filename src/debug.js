import d from 'debug';

const debugServer = d('Server');
const debugDB = d('Server:db');
const debugMiddleware = d('Server:middleware');
const debugController = d('Server:controller');

export {
    debugServer,
    debugDB,
    debugMiddleware,
    debugController
}

