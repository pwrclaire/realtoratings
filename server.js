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

mongoose.connect('mongodb://pwrclaire:123qwe@ds163402.mlab.com:63402/ninja', { useNewUrlParser: true });

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

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
