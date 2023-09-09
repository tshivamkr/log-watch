import { MongoClient } from "mongodb";


// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, {
    maxPoolSize: 1
});

async function connect() {
    const conn = await client.connect();
    return conn.db('channelier_logs');
}

export default connect;
