# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Server folder contains all backend functionalities.

This app used mongoDB to save all the input and output for Question 2, run the server in parellel with UI files,
Goto server folder and run below command.
## `npm start`

Runs the app in the development mode.\
Server runs in port 5000 [http://localhost:5000].

## __test__ folder contains all test suites.

This app uses @testing-library/jest-dom to create and run unit test cases for all the componets, to run the test suites ,
execute the below command in root directory. It will show the test results with code coverage.
## `npm test`

Note: Only modified test.js file will be executed.