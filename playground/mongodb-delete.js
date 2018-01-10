// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp.js';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {

  if (err) {

    return console.log('Unable to connect to MongoDB server');

  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // client.db(dbName).collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // client.db(dbName).collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete

  // client.db(dbName).collection('Users').findOneAndDelete({
  //   _id: new ObjectID("5a55800b8d02cc9650427672")
  // }).then((results) => {
  //   console.log(JSON.stringify(results, undefined, 2));
  // });

  // client.close();
});
