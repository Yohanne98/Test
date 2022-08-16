// person.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Person = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    time: {
        type: String
    },
    parent_card: {
        type: String
    },
    array: {
        type: String
    },
    role: {
        type: String
    }
}, {
    collection: 'person'
});

module.exports = mongoose.model('Person', Person);