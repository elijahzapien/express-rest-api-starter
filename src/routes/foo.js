import Foo from '../models/foo';

/*
 * FOO ROUTES
 * ----------
 *
 * /api/foos - GET - Get all foos
 * /api/foos - POST - Create a foo
 * /api/foos/:foo_id - GET - Get a single foo
 * /api/foos/:foo_id - PUT - Update a single foo
 * /api/foos/:foo_id - DELETE - Delete a single foo
 *
 */

export default function(router, debug) {

    // log initialize
    debug('Adding Foo routes');

    // collection
    router.route('/foo')
        .post((req, res) => {
            const foo = new Foo();
            foo.name = req.body.name;

            debug('foo post triggered:', foo);

            foo.save(err => {
                if (err) res.send(err);
                res.json({ message: 'Foo created!' });
            });
        })
        .get((req, res) => {
            Foo.find((err, foos) => {
                if (err) res.send(err);
                res.json(foos);
            });
        });

    // single documents
    router.route('/foo/:foo_id')
        .get((req, res) => {
            Foo.findById(req.params.foo_id, (err, foo) => {
                if (err) res.send(err);
                res.json(foo);
            });
        })
        .put((req, res) => {
            Foo.findById(req.params.foo_id, (err, foo) => {
                if (err) res.send(err);

                foo.name = req.body.name;

                foo.save(err => {
                    if (err) res.send(err);
                    res.json({ message: 'Foo updated!' });
                });
            });
        })
        .delete((req, res) => {
            Foo.remove(
                { _id: req.params.foo_id },
                (err, foo) => {
                    if (err) res.send(err);
                    res.json({ message: 'Foo successfully deleted!' });
                }
            );
        });

    // log complete
    debug('Foo routes added');

}

