import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost:27017/projects';
(async () => {
  try {
    const client = await MongoClient.connect(url);
    console.log("Connected successfully to server");

    const db = client.db('projects');
    const collection = db.collection('mycollection');

    // Perform database operations here

    client.close();
  } catch (err) {
    console.error(err);
  }
})();

const collection = db.collection('mycollection');

collection.find({}).toArray(function(err, docs) {
  console.log("Found the following records");
  console.log(docs);
});