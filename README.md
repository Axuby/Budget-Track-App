# Budget-Track-App
An app that helps you keep track of your expenses, built with React, Redux, JavaScript, and CSS.

## Project Status

This project is still currently in development. Users can add, edit and delete their expenses( by id). Functionality to sort by additional parameters is in progress.

## Project Screen Shot(s)

#### Example:   

[ PRETEND SCREEN SHOT IS HERE ]

[ PRETEND OTHER SCREEN SHOT IS HERE ]

## Installation and Setup Instructions  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`yarn`  

To Run Test Suite:  

`yarn test`  

To Start Server:

`yarn start`  

To Visit App:

`localhost:3000/`  

## Reflection
 

This was a 3 week long project built after my internship  at Genesys Tech Hub. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.  

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.