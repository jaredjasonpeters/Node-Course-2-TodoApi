// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp.js';
const dbName = 'TodoApp';

var user = {name: 'Jared', age: 31};
var {name} = user;
console.log(name);

MongoClient.connect(url, (err, client) => {

  if (err) {

    return console.log('Unable to connect to MongoDB server');

  }
  console.log('Connected to MongoDB server');

  // client.db(dbName).collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.db(dbName).collection('Users').insertOne({
    name: 'Jared Peters',
    age: 31,
    location: "Oregon"
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert User', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
