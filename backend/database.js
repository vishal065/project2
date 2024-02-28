const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database";

const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db("database");
  return db.collection("configurations");
  //   let response = await collection.find({ id: "qwertyuiop" }).toArray();
  //   console.log(response);
}
module.exports = getData;
