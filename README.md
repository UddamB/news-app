
# News Mag App
![Screenshot 2024-04-22 214806](https://github.com/UddamB/news-app/assets/89602764/00a7ad03-ea2c-4d8c-bff5-08acca1f0129)


## Description
Find the latest news headlines all in one app. The news mag app brings all the trending news headline articles to make staying up to date easy and convenient. Simply browse your interests using the navigation bar at the top to get to know what's happening.

Uses the Google News API to fetch trending news articles in the US and data (image, url, info) from these articles are stored and mapped to the front-end; uses Bootstrap for UI, including a navigaton bar and a card format for displaying each headline.

*Note: Since May 22 2020, Google News API changed the liberties of the free developer keys and now they reject any request using that key that is not coming from localhost. You need to buy one of the keys intended for projects on production, but the keys are free when hosted locally.*

## Tech Stack

**Front-End:** React.js, Bootstrap 

**Back-End:** React.js

**API:** Good News API



## Features 
- Easy navigation for different news
- News updates daily
- Articles linked at your fingertips


## Demo

https://github.com/UddamB/news-app/assets/89602764/5948b971-8257-430c-af41-e37446a55bd8

## API Reference

The [Google News API](https://newsapi.org/s/google-news-api) is used for referencing the API key which is stored in the environment variable `VITE_API_KEY`. 




## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
