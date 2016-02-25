import user from './user';
import foo from './foo';
import sampleData from './sampleData';

export default function(router, debug) {

    // log initialize
    debug('Adding routes');

    // mount
    foo(router);
    user(router);
    sampleData(router);

    // log complete
    debug('All routes added');

};

