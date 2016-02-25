export default function(router) {

    // mount
    router.use((req, res, next) => {
        console.log('Bar middleware triggered');
        next();
    });

}

