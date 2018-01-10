// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp.js';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {

  if (err) {

    return console.log('Unable to connect to MongoDB server');

  }
  console.log('Connected to MongoDB server');

//findOneAndUpdate

// client.db(dbName).collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5a5474ecb0d855ba687f1e4f')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result)=> {
//
//   console.log(result);
//
// });

client.db(dbName).collection('Users').findOneAndUpdate({
  _id: new ObjectID('5a5598828d02cc9650427d69')
}, {
  $set: {
    user: "President of the U.S.",
    location: "Washington D.C."
  },
  $inc: {
    age: 100
  }
}, {
  returnOriginal: false
}).then((result)=> {

  console.log(result);

});

  // client.close();
});
