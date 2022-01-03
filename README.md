# Breweries App

## Project Description

This project was created as part of the application process to Integrify.

It consists of a web application built with React (v.17.0.2) used to display a set of breweries fetched from an open REST API. The list is displayed as a grid, with each card featuring a button to display additional information on every establishment. Additionaly, there is a search bar which can be used to search/filter entries by any available field.

The UI is made using [MUI](https://github.com/mui-org/material-ui) (formerly Material-UI). I have chosen to use it since it's a great library for building UIs; it features a standard design, it's very flexible and I already had some experience working with it.

Navigation uses [React Router](https://github.com/remix-run/react-router) (v6).

## How To Run

### Prerequisites

This repository can be cloned and the the command `npm install` can be used to install the required packages.

In automated environments, since a package-lock.json is provided, `npm ci` can be used for quicker installs.

### Breweries Data

Data displayed is from the [Open Brewery Database](https://www.openbrewerydb.org/documentation/01-listbreweries). Further information about the data structure can be found on their reference.

In order for the application to perform a successful fetch request from the API, remember to set the following environmental variable with the API URL:
`REACT_APP_API_URL`

### Running and Building the App

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
