const { MongoClient } = require('mongodb');
const url = 'mongodb://10.0.1.3:27017/test'; 

async function connectToMongoDB() {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  try {
    await client.connect();
    return 'Conectado a MongoDB';
  } catch (error) {
    console.error('Error al conectar a MongoDB', error);
    throw error;
  }
}

module.exports = connectToMongoDB;

