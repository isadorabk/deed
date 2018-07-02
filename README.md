# GraphQL

Time to try a new approach on the server side.

GraphQL will let add another interface than a RESTful API into our server. In
this exercise, you will have to create a new Koa Server from scratch that will
expose a GraphQL interface, serving data about the World Cup Russia 2018.

We left some data in JSON format in the file `/data/world-cup.json`. Your
mission is to create the interface to serve that data into a client.

## Getting started

To install the required dependencies run `npm install`.

If you're in trouble, first try to solve it by yourself for some time, using
the [documentation](http://graphql.github.io/learn/). If not succeeding, ask
for some instructor help.

## Requirements

1. Create a Koa server from scratch in the `/src` folder.
2. Add graphQL into your sever by installing [apollo-server](https://www.apollographql.com/docs/apollo-server/servers/koa.html).
It's important to set it up along with GraphiQL (with an i!) which will expose
an in-browser IDE that will let you debug your queries.
3. Define all types for your system
  - Team
  - Stadium
  - Group
  - Kockout
  - Match
4. Modify your resolves so `Match` includes the following relations in a nested
fashion:
  - Both teams
  - Channels airing the match
  - Stadium info
5. Add `Match` mutations so we can modify:
  - Both teams
  - Both results
  - Both penalties
  - Winner
  - Finished


## Extra credits

- Add `lastPlayed` resolver into the `Stadium` type, which shows last match
played in there.
- Team resolvers in match should show a string "Winner of match X" if they don't
resolve into an existing team.
