# fibonacci-calculator

![app-demo](app-demo.png)

## Getting Started

To run the entire stack locally:

`$ docker-compose up`

and then visit `localhost:3000` in your browser of choice.

## Overview

**Front-End: React.js App**

A user will interact with the web app. For example, when a
user submits a number to be processed, then
the front-end app will communicate with the backend (Node.js) server.

---

**Back-End: Node.js Server**

This Backend Server performs a number of operations,
primarily functioning as an API for the two databases.

---

**Redis Database**

The Redis DB is an in-memory store, which is storing all
indices and calculated values, and then returning those
values as key-value pairs to the Node.js server
(and ultimately back to the React app for the user to see).

---

**PostgreSQL Database**

This DB stores a perminate list of indices that has been received.

---

**Worker Node**

This worker node watches the Redis DB instance for any new indices.
Whenever it sees a new indice, it will pull the indice, calculate the new
value, and then return that value to Redis.

## Frameworks & Technologies

- [Create React App](https://facebook.github.io/create-react-app/)
- [React](https://reactjs.org/)
- [AWS](https://aws.amazon.com/)
- [Docker](https://www.docker.com/)
- [Travis CI](https://travis-ci.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Node.js](https://nodejs.org/en/)
- [Nginx](https://www.nginx.com/)
