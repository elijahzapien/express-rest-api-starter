import foo from './foo';

export default function(router, debug) {

    // log initialize
    debug('Adding routes');

    // mount
    foo(router, debug);

    // log complete
    debug('All routes added');

};

