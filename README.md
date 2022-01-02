# Breweries App

This project was created as part of the application process to Integrify.

It consists of a web application built with React used to display a set of breweries fetched from an open REST API. The list is displayed as a grid, with each card featuring a button to display additional information on every establishment. Additionaly, there is a search bar which can be used to search/filter entries by any available field.

The UI is made using [MUI](https://github.com/mui-org/material-ui) (formerly Material-UI).

Navigation uses [React Router](https://github.com/remix-run/react-router) (v6).

## How to run

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## App structure



### Breweries Data

Data displayed is from the [Open Brewery Database](https://www.openbrewerydb.org/documentation/01-listbreweries). Further information about the data structure can be found on their reference.
