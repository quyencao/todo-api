const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//    console.log(result);
// });

// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: ''}).then((todo) => {

});

// Todo.findByIdAndRemove

Todo.findByIdAndRemove('58a857a94c40268c5d67bf28').then((todo) => {
    console.log(todo);
});