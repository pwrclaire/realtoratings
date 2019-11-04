const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const path = require('path');


// allow cross origin requests:
const cors = require('cors');

const app = express();

// connecting to mlab database

app.use(cors());
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });

mongoose.connection.once('open', () => {
  // console.log('Connected to DB.');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 7777;

console.log("PROCESS ENV", process.env.MONGO_DB);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
