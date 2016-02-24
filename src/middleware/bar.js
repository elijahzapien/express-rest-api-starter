export default function(router) {

    console.log('Bar middleware found');

    router.use((req, res, next) => {
        console.log('Bar middleware triggered');
        next();
    });

}

