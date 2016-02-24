import Foo from '../models/foo';

export default function(router, debug) {

    // log initialize
    debug('Adding Foo routes');

    router.route('/foo')
        .post((req, res) => {

            const foo = new Foo();
            foo.name = req.body.name;

            debug('foo post triggered:', foo);

            // db
            // save foo / check for errors
            /*
            foo.save(err => {
                if (err) res.send(err);
                res.json({ message: 'Foo created!' });
            });
            */

        });

    // log complete
    debug('Foo routes added');

}

