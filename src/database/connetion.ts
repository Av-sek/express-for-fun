const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URI;
export const database_client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });