# Full Stack Web App for CRUD Operations with Node.js, Express, React, Vite, TypeScript, Unit Test with Jest, TailWindCSS

Key Features:

- Full Type Safe with TypeScript
- Read / Write Data to CSV File
- Tailwind Design for sleek UI
- Schema Validatio with Zod
- Complete Test for all Backend Routes with Jest & SuperTest
- Production Grade Linting with eslint
- Production Ready Code format with prettier
- Proper Error Handling

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/nayak-nirmalya/node-express-csv-crud.git
```

### Install packages

```shell
npm i
```

### Start the Backend (Express Server)

```shell
npm run dev:server
```

### Run Test Cases

First Start the Dev Server and then in another terminal Run Test Cases as Below.

```shell
npm run dev:server
npm run test
```

#### OR

to run concurrently (It will start the dev server and run test suit.)

```shell
npm run test:server
```

### Start Frontend

First Start the Dev Server and then in another terminal start React Vite Server.

```shell
npm run dev:server
npm run dev
```

#### OR

to run concurrently (It will start the dev and react server.)

```shell
npm run fullstack
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                                    |
| :------ | :--------------------------------------------- |
| `dev`   | Starts a development instance of the app       |
| `build` | Starts a building final version for production |
| `start` | Run final build production version             |
