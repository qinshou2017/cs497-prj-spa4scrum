# Cs497ScrumPrj

This project is a single-page application(SPA) for education and training Scrum, it is a project management system, and education tools. The main purpose of the project is to solve the needs of distance education and telecommuting. This project is suitable for school and company training, as well as self-study.

The project uses Angular, GraphQL, AWS (Cognito, DynamoDB, Lambda, CloudWatch, Amplify, and AppSync).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Getting Started

### Prerequisites and Environment

* [git](https://git-scm.com/downloads) need v2.14.1 or later
* [Node.js](https://nodejs.org/en/download/) with [NPM](https://docs.npmjs.com/getting-started/installing-node)
    * Node.js v10.x or later
    * npm v5.x or later
* [Angular CLI](https://github.com/angular/angular-cli) `(npm install -g @angular/cli)`
* [AWS Account](https://aws.amazon.com/)
* [AWS Amplify CLI](https://github.com/aws-amplify/amplify-cli) (configured for a region where [AWS AppSync is available](https://docs.aws.amazon.com/general/latest/gr/rande.html#appsync_region)) `(npm install -g @aws-amplify/cli)`, you can see [here](https://docs.amplify.aws/start/q/integration/angular) to get stared.

### Backend Setup

This project contains an Amplify project (`/amplify`) already configured & ready to be deployed. Deploying this project will create the following resources in your account: an authentication configuration using Amazon Cognito, an AWS AppSync GraphQL API, & a DynamoDB table.

1. If this is not your first time running AWS Amplify, skip this step. Configure AWS access credentials, AWS region, and set a new AWS User Profile. For specific operations, please see [here](https://docs.amplify.aws/start/getting-started/installation/q/integration/angular#option-1-watch-the-video-guide):
    ```bash
    $ amplify configure
    ```

2. Clone this repository and navigate to the created folder:
    ```bash
    $ git clone https://github.com/qinshou2017/cs497-prj-spa4scrum.git
    $ cd cs497-prj-spa4scrum
    ```

3. Set up your AWS resources the Amplify CLI:
    ```bash
    $ amplify init
    ```
    For this project, you will have to change the Distribution Directory Path from `dist` to `dist/amplify`, others are configured according to the default settings:
    ```
    Distribution directory path (dist)
    Change from dist to dist/amplify
    ```

4. Install the required modules:

    ```bash
    $ npm install
    ```
    If you need to ensure that the version does not change, you need to install it according to package-lock.json:
    ```bash
    $ npm ci
    ```

5. Add authentication and analytics to the project with the default options:

    ```bash
    $ amplify add api
    $ amplify add auth
    ```

4. Create the cloud resources by pushing the changes:

    ```bash
    $ amplify push
    ```

5. After uploading, AWS will build the database according to `amplify/backend/schema.graphql`. You can visit [AWS DynamoDB](https://console.aws.amazon.com/dynamodb/home) to view your data. Then add the following code to AWS Lambda to synchronize the user from AWS Cognito to the database when the user is successfully registered. Note that `<your users table name>` is replaced with your user table name. For specific AWS Lambda operations, please see [here](https://medium.com/hackernoon/how-to-add-new-cognito-users-to-dynamodb-using-lambda-e3f55541297c)：

    ```javascript
    var aws = require('aws-sdk');
    var ddb = new aws.DynamoDB({apiVersion: '2012-10-08'});

    exports.handler = async (event, context) => {
        const date = new Date(), ISOtime = date.toISOString();
        console.log(event);
        const tableName = process.env.TABLE_NAME || "<your users table name>",
            region = event.region || process.env.REGION;
        console.log(`table=${ tableName } -- region=${ region }`);
        aws.config.update({ region });
        // If the required parameters are present, proceed
        if (event.request.userAttributes.sub) {
            // -- Write data to DDB
            const ddbParams = {
                TableName: tableName,
                Item: {
                    'cognitoId': {S: event.request.userAttributes.sub},
                    'username': {S: event.userName},
                    'email': {S: event.request.userAttributes.email},
                    '__typename': {S: 'User'},
                    'createdAt': {S: ISOtime},
                    'updatedAt': {S: ISOtime},
                },
            };
            // Call DynamoDB
            try {
                await ddb.putItem(ddbParams).promise();
                console.log("Success: Everything executed correctly");
            } catch (err) {
                console.log("Error: ", err);
            }
        }
        else {
            // Nothing to do, the user's email ID is unknown
            console.log("Error: Nothing was written to DDB or SQS");
        }
        context.done(null, event);
    };
    ```


6. Rename the automatically generated `/src/aws-exports.js` to `/src/aws-exports.ts`:
    ```bash
    $ mv ./src/aws-exports.js ./src/aws-exports.ts
    ```

7. Run the project
    ```bash
    $ npm start
    ```

8. Deleting the project resources
    If you'd like to tear down the project & delete all of the resources created by this project, run the delete command.
    ```bash
    $ amplify delete
    ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
