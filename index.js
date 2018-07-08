const express = require('express');
const bodyParser = require('body-parser');
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');
const cors = require('cors');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

mongoose.connect('mongodb://localhost/deed');

const User = mongoose.model('User', {
  userName: String,
  firstName: String,
  lastName: String,
  password: String,
  image: String,
  email: String,
  city: String,
  groups: [String],
  delegate: [String],
  tasks: [String],
  karmas: [{
    karmaPoint: Number,
    group: String,
    image: String
  }]
});
const Group = mongoose.model('Group', {
  name: String,
  type: String,
  users: [String],
  delegates: [String],
  tasks: [String],
  messages: [{
    author: String,
    text: String,
    timeStamp: Number
  }],
  icon: String,
  coverPhoto: String,
  prizes: [{
    image: String,
    desc: String,
    points: Number
  }],
});

const Task = mongoose.model('Task', {
  group: String,
  title: String,
  content: String,
  status: String,
  image: String,
  points: Number,
  userCompleted: String,
  prove: {
    image: String,
    text: String
  }
});

const PORT = 3000;

const app = express();
app.use(cors());

app.use(express.static('./client'));
app.use(bodyParser.json());


app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { User, Group, Task } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
