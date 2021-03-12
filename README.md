# Typescript/Express/Jest/Swagger Boilerplate Setup for Microservice

This is a simple boilerplate repository that can fit any small express application or microservice architecture. We are using Typescript as our programming language, Express as our backend framework, Mongoose (Typegoose) as our ORM, Jest (ts-jest, Sinon, supertest) as our unit, and integration testing framework, and Swagger (tsoa, swagger-ui-express) as our API Documentation Generator. We are using Eslint and Prettier to maintain our code standards. All the tools we are using has their configuration file.



## How to Use

-   Clone this repository `git clone https://github.com/mrhm-dev/ts-express-jest-swagger-boiler.git my-project`
-   Check your node version, this project is build on `node v14.16.0` 
-   You can use `nvm` to change install and use multiple version of node on your machine. For example - `nvm install 14.16.0` && `nvm use v14.16.0`
-   Run `yarn install` or `npm install`
-   Create `.env` file from `default.env` file and update with your information
-   Update configuration file from `/config` 
-   Let's Enjoy, Happy Coding 😍



## File Structure

```
📦ts-boiler
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂config
 ┃ ┣ 📜custom-environment-variables.json
 ┃ ┣ 📜default.json
 ┃ ┣ 📜development.json
 ┃ ┣ 📜production.json
 ┃ ┣ 📜stage.json
 ┃ ┗ 📜test.json
 ┣ 📂logs
 ┃ ┣ 📜access-errors.log
 ┃ ┗ 📜access.log
 ┣ 📂src
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜README.md
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜books-controller.ts
 ┃ ┃ ┗ 📜helloWorldController.ts
 ┃ ┣ 📂database
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂errors
 ┃ ┃ ┣ 📜appError.ts
 ┃ ┃ ┣ 📜globalError.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂interfaces
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜README.md
 ┃ ┣ 📂middlewares
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜useMorgan.ts
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜book-model.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜README.md
 ┃ ┣ 📂routes
 ┃ ┃ ┗ 📜routes.ts
 ┃ ┣ 📂services
 ┃ ┣ 📂swagger
 ┃ ┃ ┣ 📜index.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜logger.ts
 ┃ ┣ 📂validators
 ┃ ┣ 📜app.ts
 ┃ ┗ 📜index.ts
 ┣ 📂test
 ┃ ┗ 📜demo.test.ts
 ┣ 📜.env
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜default.env
 ┣ 📜dev.env
 ┣ 📜jest.config.ts
 ┣ 📜junit.xml
 ┣ 📜package.json
 ┣ 📜prod.env
 ┣ 📜README.md
 ┣ 📜swagger.json
 ┣ 📜tsconfig.json
 ┣ 📜tsoa.json
 ┣ 📜yarn-error.log
 ┗ 📜yarn.lock
```

In this boilerplate setup there are mainly 4 different section to cover. 

1.  config (global configuration for the application)
2.  src (source codes)
3.  test (unit & integration test codes)
4.  environment configuration files (Ex. tsconfig.json, jest.config.ts)

I will go over all the sections and it's child directory and files to describe what is happening inside their.



## Package.json - Dependencies / Dev Dependencies / Scripts

At first, we will look at our `package.json` file as we know this the manifest file of a nodejs application. I tried to keep the `package.json` file simple, didn't mix any other configuration. Rather than mixing everything in a single file, I create separate configuration files for every third-party tool. We have 4 different sections that should describe - 

-   scripts - All custom npm scripts
-   dependencies - Application level dependencies
-   devDependencies - Development level dependencies
-   engine - we are using `node v14.16.0`



### Dependencies

We are using following dependencies - 

```json
{
    "@typegoose/typegoose": "^7.6.0",  	// Typegoose ORM (Work with Mongoose & Typescript)
    "chalk": "^4.1.0",					// Colorful console log
    "compression": "^1.7.4",			// Compress responses
    "config": "^3.3.6",					// Manage configuration based on environment
    "cors": "^2.8.5",					// Handle CORS errors
    "dotenv": "^8.2.0",					// Manage environment variables
    "express": "^4.17.1",				// Express web framework
    "express-rate-limit": "^5.2.6",		// Handle unusal request by a bot
    "jsdoc": "^3.6.6",					// Generate documentation from comments
    "mongoose": "5.10.18",				// MongoDB ORM
    "morgan": "^1.10.0",				// Request logger
    "rotating-file-stream": "^2.1.5",	// Log rotator				
    "swagger-ui-express": "^4.1.6",		// Render swagger UI from express application
    "tsoa": "^3.5.2",					// Typescript Open API - decorator based
    "winston": "^3.3.3"					// Application logger library
}
```



### DevDependencies

We are using following devDependencies - 

```json
{
    "@babel/core": "^7.13.10",
    "@babel/polyfill": "^7.12.1",
    "@types/babel-core": "^6.25.6",
    "@types/compression": "^1.7.0",
    "@types/config": "^0.0.38",
    "@types/cors": "^2.8.10",
    "@types/dotenv": "^8.2.0",
    "@types/express": "^4.17.11",
    "@types/express-rate-limit": "^5.1.1",
    "@types/jest": "^26.0.20",
    "@types/mongoose": "^5.10.3",
    "@types/morgan": "^1.9.2",
    "@types/node": "^14.14.33",
    "@types/sinon": "^9.0.11",
    "@types/supertest": "^2.0.10",
    "@types/swagger-jsdoc": "^6.0.0",
    "@types/swagger-ui-express": "^4.1.2",
    "@types/winston": "^2.4.4",
    "@typescript-eslint/eslint-plugin": "^4.17.0",		// ESLint Plugin
    "@typescript-eslint/parser": "^4.17.0",				// ESLint Parser
    "eslint": "^7.21.0",								// Linter
    "eslint-config-prettier": "^8.1.0",					// Prettier for ESLint
    "eslint-plugin-prettier": "^3.3.1",					// ESLint Perttier Plugin
    "jest": "^26.6.3",									// Unit & Integration Test Library
    "jest-junit": "^12.0.0",							// Jest Reporter
    "nodemon": "^2.0.7",								// Hot Module Replacement
    "prettier": "^2.2.1",								// Prettify Codes
    "sinon": "^9.2.4",									// Mocks & Stubs
    "supertest": "^6.1.3",								// API Test
    "ts-jest": "^26.5.3",								// Jest for Typescript
    "ts-node": "^9.1.1",								// Typescript support for Node
    "ts-node-dev": "^1.1.6",							// Setup development environment
    "tslint": "^6.1.3",									// Typescript linter
    "tslint-config-prettier": "^1.18.0",				// Tslinter with Prettier
    "typescript": "^4.2.3"								// Typescript Compiler
}
```



### Scripts

We have following scripts that should keep in mind when using boilerplate code. You can adjust scripts anytime and add more scripts if necessary. 

```json
{
    "start": "tsc --skipLibCheck && node ./build/index.js",
    "dev": "ts-node-dev ./src/index.ts",
    "doc": "tsoa routes && tsoa swagger",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint ./src/**/*.ts --quiet --fix",
    "prettier": "prettier --write .",
    "test": "jest --ci --testResultsProcessor=jest-junit"
}
```

`npm start` or `yarn start` - it will build the project and run index.js file from build directory. This command will be used when we deploy our application to the server.

`npm run dev` or `yarn dev` : this command will run a development server and watch for file changes.

`npm run doc` or `yarn doc`: this command will generate `swagger.json`  and `/src/routes/routes.js` files. Every time we update our controller files in `/src/controller` we need to run this command to get the update. This command will gather tsoa decorators from controller files and generate swagger documentation and routes for us. 

`npm run lint` or `yarn lint`: Check linter errors.

`npm run lint:fix` or `yarn lint:fix`: Fix linter errors.

`npm run prettier` or `yarn prettier`: Prettify source codes.

`npm test` or `yarn test`: Run test codes