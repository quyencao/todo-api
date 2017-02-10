// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('589c951fafab80fc836319be')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //
    // });

    // db.collection('Users').find({name:'Quyen'}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(err);
    // });
    //
    // db.collection('Todos').find({text:'Eat lunch'}).toArray().then((res) => {
    //    console.log(res);
    // });

    // db.collection('Todos').findOneAndUpdate({_id: ObjectID("589c8b0684135929b4a65b37")},
    //     {$set: {text:"Something to do!!", completed: false}}).then((res) => {
    //     console.log(res);
    // });

    db.close();
});
