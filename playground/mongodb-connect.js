// const MongoClient = require('mongodb').MongoClient;
// mongod.exe --dbpath /Users/quyencao/mongo-data
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Quyen',
    //     age: 22,
    //     location: 'Ha Noi'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to connect insert new user', err);
    //     }
    //
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    // console.log(db.collection('Users').find({}).toArray().then((doc) => {
    //     console.log(doc);
    // }));

    db.close();
});
