import express from 'express';

import Foo from 'models/foo';

const FooRouter = express.Router();

/*
 * FOO
 * ---
 *
 * /api/foos - GET - Get all foos
 * /api/foos - POST - Create a foo
 * /api/foos/:foo_id - GET - Get a single foo
 * /api/foos/:foo_id - PUT - Update a single foo
 * /api/foos/:foo_id - DELETE - Delete a single foo
 *
 */

// collection
FooRouter.route('/foos')
    .post((req, res) => {
        const foo = new Foo({ name: req.body.name });
        foo.save(err => {
            if (err) return res.send(err);
            return res.json({ message: 'Foo created' });
        });
    })
    .get((req, res) => {
        Foo.find((err, foos) => {
            if (err) return res.send(err);
            return res.json(foos);
        });
    });

// documents
FooRouter.route('/foos/:foo_id')
    .get((req, res) => {
        Foo.findById(req.params.foo_id, (err, foo) => {
            if (err) return res.send(err);
            return res.json(foo);
        });
    })
    .put((req, res) => {
        Foo.findById(req.params.foo_id, (err, foo) => {
            if (err) return res.send(err);
            foo.name = req.body.name;
            foo.save(err => {
                if (err) return res.send(err);
                return res.json({ message: 'Foo updated' });
            });
        });
    })
    .delete((req, res) => {
        Foo.remove(
            { _id: req.params.foo_id },
            (err, foo) => {
                if (err) return res.send(err);
                return res.json({ message: 'Foo successfully deleted' });
            }
        );
    });

export default FooRouter;

