const typeDefs = `
type User {
    _id: String!
    userName: String!
    firstName: String!
    lastName: String!
    password: String!
    image: String
    email: String!
    city: String!
    groups: [String]
    delegate: [String]
    tasks: [String]
    karmas: [Karma]
}

type Group {
  _id: String!
  name: String!
  type: String!
  users: [String!]!
  delegates: [String!]!
  tasks: [String]
  messages: [Message]
  icon: String
  coverPhoto: String
  prizes: [Prize]
}

type Task {
  _id: String!
  group: String!
  title: String!
  content: String!
  image: String
  status: String!
  points: Int!
  userCompleted: String
  prove: Prove
}

input TaskInput {
  status: String!
  userCompleted: String
  prove: ProveInput
}

input TaskInput2 {
  points: Int!
}

type Prove {
  image: String
  text: String
}

input ProveInput {
  image: String
  text: String
}

type Message {
  author: String!
  text: String!
  timeStamp: Int!
}

type Karma {
  group: String!
  karmaPoint: Int!
  image: String
}

input KarmaInput {
  group: String!
  karmaPoint: Int!
  image: String
}

input PrizeInput {
  image: String
  desc: String!
    points: Int!
}

type Prize {
  image: String
  desc: String!
    points: Int!
}

type Query {
  allUsers(userName: String): [User!] !
  allGroups(name: String): [Group!] !
  allTasks(group: String): [Task!] !
}

type Mutation {

  createUser(
    userName: String!
    firstName: String!
    lastName: String!
    password: String!
    image: String
    email: String!
    city: String!
  ): User!

  createGroup(
    name: String!
    type: String!
    users: [String]
    delegates: [String]
    icon: String
    coverPhoto: String
  ): Group!

  createTask(
    group: String!
    title: String!
    content: String!
    image: String
    status: String
    points: Int!
    ): Task!

  updateKarma(
    userName: String!
    input: KarmaInput
  ): User

  updateUserGroup (
    userName: String!
    groups: String!
  ): User

  updateUserDelegate(
    userName: String!
    delegate: String!
  ): User

  updateTask(
    _id: String!
    input: TaskInput!
  ): Task

  updateTaskPoints(
    _id: String!
    input: TaskInput2
  ): Task

  addPrize(
    name: String!
    input: PrizeInput!
  ): Group
}
`;

module.exports = typeDefs;