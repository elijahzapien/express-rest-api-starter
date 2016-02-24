export default function(router, debug) {

    // log initialize
    debug('Adding Bar middleware');

    // mount
    router.use((req, res, next) => {
        debug('Bar middleware triggered');
        next();
    });

    // log complete
    debug('Bar middleware added');

}

