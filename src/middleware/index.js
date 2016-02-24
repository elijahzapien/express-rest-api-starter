import bar from './bar';

export default function(router, debug) {

    // log initialize
    debug('Adding middleware');

    // mount
    bar(router, debug);

    // log complete
    debug('All middleware added');

};
