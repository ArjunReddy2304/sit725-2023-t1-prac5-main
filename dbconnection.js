

  
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://reddymalli13:Hi6tnDYoV2nYIF10@cluster0.yosuevd.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

client.connect();

module.exports = client;