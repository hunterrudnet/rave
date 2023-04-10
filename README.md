# Rave - Social Media for Albums App

Welcome to Rave, the social media app for albums! Rave is an app where users can discover, share, and review albums with friends and other music enthusiasts. This README file provides all the necessary information to get started with the Rave app.

## Backend

The backend for Rave can be found at https://github.com/hunterrudnet/rave-backend/. The backend is built with Node.js and uses Sequalize for data storage.

## Environment Variables

In order to run Rave correctly, you will need to create a .env file in the root directory with the following variables:

- `REACT_APP_AUTH0_DOMAIN`: The Auth0 domain for your app.
- `REACT_APP_AUTH0_CLIENT_ID`: The client ID for your Auth0 app.
- `REACT_APP_BASE_API`: The base URL for the Rave backend.

For development, we assume that the backend is running on port 8080. Therefore, you will need to set `REACT_APP_BASE_API` to `http://localhost:8080`.

## Getting Started

To get started with Rave, follow these steps:

1. Clone the Rave repository:
`git clone https://github.com/hunterrudnet/rave.git`

2. Navigate to the `rave` directory and install the dependencies:
```
cd rave
npm install
```

3. Create a `.env` file in the root directory with the necessary environment variables.

4. Start the app:
`npm start`

The app should now be running at `http://localhost:3000`.

## Contributing

We welcome contributions to the Rave app! If you'd like to contribute, please fork the repository and submit a pull request. Please be sure to follow our code of conduct and our contributing guidelines.


