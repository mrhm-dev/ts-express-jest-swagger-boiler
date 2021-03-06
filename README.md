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
    "@typegoose/typegoose": "^7.6.0",  	
    "chalk": "^4.1.0",					
    "compression": "^1.7.4",			
    "config": "^3.3.6",					
    "cors": "^2.8.5",					
    "dotenv": "^8.2.0",					
    "express": "^4.17.1",				
    "express-rate-limit": "^5.2.6",		
    "jsdoc": "^3.6.6",					
    "mongoose": "5.10.18",				
    "morgan": "^1.10.0",				
    "rotating-file-stream": "^2.1.5",					
    "swagger-ui-express": "^4.1.6",		
    "tsoa": "^3.5.2",					
    "winston": "^3.3.3"					
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
    "@typescript-eslint/eslint-plugin": "^4.17.0",		
    "@typescript-eslint/parser": "^4.17.0",				
    "eslint": "^7.21.0",								
    "eslint-config-prettier": "^8.1.0",					
    "eslint-plugin-prettier": "^3.3.1",					
    "jest": "^26.6.3",									
    "jest-junit": "^12.0.0",							
    "nodemon": "^2.0.7",								
    "prettier": "^2.2.1",								
    "sinon": "^9.2.4",									
    "supertest": "^6.1.3",								
    "ts-jest": "^26.5.3",								
    "ts-node": "^9.1.1",								
    "ts-node-dev": "^1.1.6",							
    "tslint": "^6.1.3",									
    "tslint-config-prettier": "^1.18.0",				
    "typescript": "^4.2.3"								
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

-   `npm start` or `yarn start` - it will build the project and run index.js file from build directory. This command will be used when we deploy our application to the server.

-   `npm run dev` or `yarn dev` : this command will run a development server and watch for file changes.

-   `npm run doc` or `yarn doc`: this command will generate `swagger.json`  and `/src/routes/routes.js` files. Every time we update our controller files in `/src/controller` we need to run this command to get the update. This command will gather tsoa decorators from controller files and generate swagger documentation and routes for us. 

-   `npm run lint` or `yarn lint`: Check linter errors.

-   `npm run lint:fix` or `yarn lint:fix`: Fix linter errors.

-   `npm run prettier` or `yarn prettier`: Prettify source codes.

-   `npm test` or `yarn test`: Run test codes



---



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
 ┣ 📜.env.dev
 ┣ 📜.env.prod
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜default.env
 ┣ 📜jest.config.ts
 ┣ 📜junit.xml
 ┣ 📜package.json
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



### 1. Config (Global Configuration for The Application)

In the config directory we can see different configuration files. We will set different configurations and secret keys using [config](https://github.com/lorenwest/node-config) and [dotenv](https://github.com/motdotla/dotenv) npm packages. `default.json` file is our main configuration file. We can override some configuration based environment using `development.json`, `production.json` or `test.json` files. We don't need to override everything, we can update only necessary changes. `custom-environment-variables.json` file is responsible for managing environment variables.

Here is a snapshot of the file structure - 

```
📦config
 ┣ 📜custom-environment-variables.json
 ┣ 📜default.json
 ┣ 📜development.json
 ┣ 📜production.json
 ┣ 📜stage.json
 ┗ 📜test.json
```



### 2. SRC (Source Codes)

`src` is the most important directory because we will write our business logics and application code inside this directory and files. I am trying to explain it's child directory and their responsibilities. 

```
📦src
 ┣ 📂constants
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜README.md
 ┣ 📂controllers
 ┃ ┣ 📜books-controller.ts
 ┃ ┗ 📜helloWorldController.ts
 ┣ 📂database
 ┃ ┗ 📜index.ts
 ┣ 📂errors
 ┃ ┣ 📜appError.ts
 ┃ ┣ 📜globalError.ts
 ┃ ┗ 📜index.ts
 ┣ 📂interfaces
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜README.md
 ┣ 📂middlewares
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜useMorgan.ts
 ┣ 📂models
 ┃ ┣ 📜book-model.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜README.md
 ┣ 📂routes
 ┃ ┗ 📜routes.ts
 ┣ 📂services
 ┣ 📂swagger
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┗ 📜logger.ts
 ┣ 📂validators
 ┣ 📜app.ts
 ┗ 📜index.ts
```

-   `app.ts` : Main application file where we create an express application and configure middleware, routes and other stuffs.
-   `index.ts` : This is where our application will boot. In this file I have created an HTTP server using express application from `app.ts`, connect databases and handle global errors and rejections. If you want to connect Socket.io or other server this `index.ts` file will be the perfect place for that. 
-   `constants` : Store global constants.
-   `controllers` : All controller definition will goes here. Use [tsoa](https://github.com/lukeautry/tsoa) to create controllers. 
-   `database` : Database configuration and connect function.
-   `errors` : All error related files like custom errors, error handlers and other configurations.
-   `interfaces` : All interfaces will live here.
-   `middlewares` : Custom middleware will live here.
-   `models` : All database schema and models definition will goes here.
-   `routes` : Don't need to touch, it will generate `RegisterRoute` function when run `yarn doc` command.
-   `services` : All business logic will stay here.
-   `swagger` : Swagger related configurations will stay here.
-   `utils` : We can define various utility functions here that we can reuse.
-   `validators` : All validation logic will be written here.



### 3. Test (Unit & Integration Test Codes)

In this directory we will write our test codes. Basically it will replicate our source directory and file structures. Then we will write unit and integration testing for all of our source codes that need to be tested. 



### 4. Environment Configuration Files

```
📦ts-boiler
 ┣ .......
 ┣ .......
 ┣ 📜.env
 ┣ 📜.env.dev
 ┣ 📜.env.prod
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜default.env
 ┣ 📜jest.config.ts
 ┣ 📜junit.xml
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜swagger.json
 ┣ 📜tsconfig.json
 ┣ 📜tsoa.json
 ┣ 📜yarn-error.log
 ┗ 📜yarn.lock
```

We have a lot of different configuration files. I have configured most of the third-party libraries in a standard manner. You may also need to tweak some of the configurations. That's why you need to understand what are these configuration file doing. 

-   `.env` : Define all of your environment variables.
-   `.eslintignore` : Define those files that you don't want to lint. 
-   `.eslintrc` : ESLint configuration file.
-   `.gitignore` : Ignore some file that you don't want to track.
-   `.prettierrc` : Prettier configuration file.
-   `default.env` : Sample of environment variables
-   `jest.config.ts` : Jest configuration file.
-   `swagger.json` : Auto generated swagger file.
-   `tsconfig.json` : Typescript configuration file.
-   `tsoa.json` : TSOA configuration file