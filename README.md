# Ayan Tuladhar
# CSC3916_HW5(REACT API)
# 04/17/2022

# Please use Live Preview to view the ReactApp
# Live Webstie

[Live Preview](https://ayanhw5-react-frontend.herokuapp.com/)

#Link for Backend

https://github.com/ayantuladhar1/CSC3916_HW5_Backend.git

Purpose 
The purpose of this assignment is to create a React Single Page App over your developed API. The interface will allow the users to search for movies, display information about the movie, see stored ratings, and allow the user to enter a rating. 

Pre-Requirements 

• Assignment 3 deployed REACT app that supports SignUp and Logon 

• Assignment 4 that supports reviews 

Requirements 

• Update your API to support storing an image (or image URL) for the movies you have stored.  

You will use the image URL in your React application to show the image of movies 

– New Attribute on the movie collection 

• For this assignment all your endpoints should be protected by JWT authentication 

• Implement the following interfaces 

– User SignUp and User Logon 

▪ Leverage your User mongoDB collection to store new users of the application 

– Main screen should show the top rated movies (show at least 5) 

▪ Your GET /movies endpoint should sort by rating (server side) 

• Update  your  /movies  (with  reviews=true)  endpoint  to  sort  by average rating descending 

– Movie  Detail  screen,  shows  the  Movie,  Image,  Actors  that  were  in  the  movie, aggregated rating for the movie and grid that shows the reviews (username, rating, review) 

– Extra Credit: Movie Search – show results in a grid, accordion or other list control 

▪ Add Search API (HTTP POST) to the API that can take partial movie names or partial actor names 

Acceptance Criteria 

• User is able to Sign-up (name, username, password) 

• User is able to Logon to the application (username, password) 

• User is able to see list of movies and select a movie to see the detail screen (top rated movies displayed) 

• User is able to enter a review on the detail page (enter a rating and comment) – the logged in user’s username will be associated with the review (as captured from the JSON Web Token) 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
