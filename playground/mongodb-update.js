// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('589d91f9dae0de7ea3f438a1')
    // }, {
    //     // mongodb update operators $set
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('589c910c8e1c6600fcb68ff5')
    }, {
        // mongodb update operators $set, $inc and many...
        $set: {
            name: 'Quyen',
            location: 'Ha Noi'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
       console.log(result);
    });

    // db.close();
});

// https://docs.mongodb.com/manual/reference/operator/update/