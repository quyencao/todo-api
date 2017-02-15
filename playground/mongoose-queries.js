const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "58a472a40a1591002317203444";

// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }
//
// Todo.find({}).then((todos) =>{
//     console.log(todos);
// });

// Todo.find({ _id : id }).then((res) => {
//    console.log('Todos', res);
// });
//
// Todo.findOne({ _id : id }).then((todo) => {
//    console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//    console.log('Todo by Id',todo);
// }).catch((err) => console.log(err));

var id = "589dc78c9988f1980da1bf24";
User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (err) => console.log(err));