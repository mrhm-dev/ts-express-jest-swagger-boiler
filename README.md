# Typescript/Express/Jest/Swagger Boilerplate Setup for Microservice

This is a simple boilerplate repository that can fit any small express application or microservice architecture. We are using Typescript as our programming language, Express as our backend framework, Mongoose (Typegoose) as our ORM, Jest (ts-jest, Sinon, supertest) as our unit, and integration testing framework, and Swagger (tsoa, swagger-ui-express) as our API Documentation Generator. We are using Eslint and Prettier to maintain our code standards. All the tools we are using has their configuration file.

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
 ┃ ┃ ┣ 📜definition.json
 ┃ ┃ ┣ 📜definition.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜spec.json
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