const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FooSchema   = new Schema({
    name: String
});

export default mongoose.model('Foo', FooSchema);
