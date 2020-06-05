const express = require('express');
const expressGraphql = require('express-graphql');
const schema = require('../schema/schema');

const app = express();


app.use('/graphql', expressGraphql({
  schema,
  graphiql: true,
}));


app.listen(4000, () => console.log('Expressssss GraphQL Server on localhost:4000'));
