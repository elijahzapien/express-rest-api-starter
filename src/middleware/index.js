import bar from './bar';

export default function(router) {

    console.log('all middleware found');

    bar(router);

};
