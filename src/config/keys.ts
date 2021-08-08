require('dotenv').config();

export default {
  mongoURI: process.env.mongoURI,
  dbName: process.env.dbName,
};
