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
git clone https://github.com/nayak-nirmalya/messenger-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
DATABASE_URL=

NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=
PUSHER_CLUSTER=
```

### Setup Prisma

```shell
npx prisma db push
```

### Start the App

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                                    |
| :------ | :--------------------------------------------- |
| `dev`   | Starts a development instance of the app       |
| `build` | Starts a building final version for production |
| `start` | Run final build production version             |
