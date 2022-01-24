# Rule of thumb

This app is live running at [rule-of-thumb-ui.surge.sh](https://rule-of-thumb-ui.surge.sh)

The following is a brief description of the technologies used to build this app.

- The app was built using [React.js](https://reactjs.org) to handle interactions with the user.
- [Redux](https://redux.js.org/) was used as state management library.
- The application data is stored in Firebase Firestore, as soon as the
  application is opened, the data is fetched from the database and stored in the
  Redux store, if the data fetch fails for any reason a mock local dataset will
  be used in place.
- The app was deployed to a service called [Surge](https://surge.sh/).
- A GitHub workflow is included to build and deploy the app automatically after each
  commit.

### Available Scripts

#### `yarn start`

- Use this command to run the project, the app will open in development mode at [http://localhost:3000](http://localhost:3000).
- The page will reload when code is updated, some lint errors may appear in the console.

#### `yarn build`

This command compiles the the app for production to the `build` folder.
