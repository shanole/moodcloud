# moodcloud

#### Epicodus Capstone: October 2021

#### By Shannon Lee

#### _Table of Contents_

1. [Description](#description)
2. [Technologies Used](#technologies)
3. [Setup/Installation Requirements](#setup)
4. [Known Bugs](#bugs)
5. [License](#license)
6. [Contact Information](#contact)

## Description <a id="description"></a>

moodcloud is a web application that is designed to help users track their mood over time, as well as track what factors are influencing their daily mood. This is meant to help people better understand their mental health and make note of which daily habits are positively or negatively impacting their lifestyles. This app was made as a capstone project for Epicodus Portland 2021.

☁️ [VIDEO DEMO](https://www.youtube.com/watch?v=06mHd1ojZc8) ☁️

☁️ [SEE LIVE DEMO](https://moodcloud-b54e6.web.app/) ☁️

## Technologies Used <a id="technologies"></a>

Main technologies used:

- React.js
- Redux
- JavaScript / JSX
- Firebase / Firestore
- Node Package Manager
- HTML
- CSS

Additional libraries:

- [React Redux Firebase](http://react-redux-firebase.com/)
- [React Router](https://reactrouter.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Styled-Components](https://styled-components.com/)
- [React Tag Input](https://www.npmjs.com/package/react-tag-input)
- [React-Spring](https://react-spring.io/)
- [Chart.js](https://www.chartjs.org/docs/latest/)

Misc. resources:

- [Pexels.com](https://pexels.com)
- [FontAwesome](https://fontawesome.com/)

## Setup/Installation Requirements <a id="setup"></a>

Setup requirements

- Make sure [Node.js](https://nodejs.org/en/) and [Node Package Manager (npm)](https://www.npmjs.com/) are set up on your local machine. If not, follow the installation guide [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js).
- This project's backend is based on Firebase. To run this project on your local machine with your own database, first create a new Firebase project per [these instructions](https://www.learnhowtoprogram.com/react-part-time-c-and-react-track/react-with-nosql/setting-up-a-firebase-project).
- In the root directory of this project, create an `.env` file and save your Firebase configuration:
  <details>

    <summary>Firebase config .env</summary>

  ```
  REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
  REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
  REACT_APP_FIREBASE_DATABASE_URL = "https://YOUR-PROJECT-NAME.firebaseio.com"
  REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
  REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
  REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"
  ```

  </details>

Installation

- Clone this repository to your machine `$ git clone https://github.com/shanole/moodcloud`
- In the terminal, navigate to the top level of this directory `moodcloud/`
- Recreate project environment and install required dependencies `$ npm install`
- Open project in a development server on your web browser `$ npm start` to open it on http://localhost:3000

## Known Bugs/Issues <a id="bugs"></a>

- PrivateRoute redirects users to LandingPage even when user is authorized - this is especially buggy on deployed page
- making a change to EntryList effectively cancels out pagination/infinite scroll and just loads all the documents in the collection. It might be that I have to make a choice between live updates vs pagination
- Longer entries look bad in mobile
- Keywords that have just been added to database don't show correct color

I am proud of the work I have done for moodcloud, but it is definitely still a work in progress. If you notice any further bugs or issues please let me know!

<details>
  <summary>TO DOs</summary>

stretch goals/bonus features

- [ ] _more animations_
- [ ] _page to confirm delete_
- [ ] _weather widget with openWeather?_
- [ ] _more fleshed out user registration flow_
- [ ] _reset pw, change email, other user customization options_
- [ ] _limit only one post a day_
</details>

## License <a id="license"></a>

_[MIT](https://choosealicense.com/licenses/mit/)_

Copyright (c) 2021 Shannon Lee

## Contact Information <a id="contact"></a>

**_Shannon Lee [mailto](mailto:shannonleehj@gmail.com)_**
