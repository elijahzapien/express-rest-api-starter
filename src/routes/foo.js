import Foo from '../models/foo';

export default function(router) {

    console.log('Foo routes found');

    router.route('/foo')
        .post((req, res) => {

            const foo = new Foo();
            foo.name = req.body.name;

            console.log('foo post triggered:', foo);

            // db
            // save foo / check for errors
            /*
            foo.save(err => {
                if (err) res.send(err);
                res.json({ message: 'Foo created!' });
            });
            */

        });

}

