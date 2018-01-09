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

  // client.db(dbName).collection('Todos').find({
  // text: "Walk the dog"
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  client.db(dbName).collection('Users').find({name: "Tom"}).toArray().then((names) => {
    console.log(`Names: ${names[0].name}`);
    console.log(JSON.stringify(names, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch names', err);
  });

  // client.close();
});
