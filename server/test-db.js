const mongoose = require('mongoose');
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

console.log('Testing connection to:', MONGO_URL.replace(/:.*@/, ':****@'));

async function test() {
  try {
    console.log('Connecting...');
    await mongoose.connect(MONGO_URL, { serverSelectionTimeoutMS: 5000 });
    console.log('SUCCESS: Connected to MongoDB!');
    process.exit(0);
  } catch (err) {
    console.error('FAILURE: Could not connect.');
    console.error(err);
    process.exit(1);
  }
}

test();
