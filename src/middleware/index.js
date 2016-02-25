import bar from './bar';

export default function(router, debug) {

    // log initialize
    debug('Adding middleware');

    // mount
    bar(router);

    // log complete
    debug('All middleware added');

};
