# moodcloud

#### Epicodus Capstone: October 2021

#### By Shannon Lee

#### _Table of Contents_

1. [Description](#description)
2. [Technologies Used](#technologies)
3. [Setup/Installation Requirements](#setup)
4. [Component Diagram](#diagram)
5. [Known Bugs](#bugs)
6. [License](#license)
7. [Contact Information](#contact)

## Description <a id="description"></a>

<details>
  <summary>Progress log (will be deleted)</summary>

- Sep 19
  - Submitted new capstone proposal, set up basic react environment
  - Planning component diagram, researching authentication w/ Firebase
  - Create to do list of tasks
- Sept 21
  - Static layout, Redux, and firebase set up
- Sept 22
  - Basic CRUD for new entries
  - I am SO CLOSE to getting the NewEntryForm component to add keywords to the keywords collection... I can get it to add, but not to update averages!!! Figure this out next time, as well as what to do when editing and deleting
- Sept 26
  - Finished database design for keyword collection
  - Incorporated pagination w/ EntryList - having trouble w/ infinite scroll
- Sept 27
  - Finished infinite scrolling EntryList
  - Researched Chart.js
  - Got basic implementation of chart down
  - Started authentication/authorization
- Sept 28
  - got auth/authorization logic figured out
  - created different routes
  - created and styled landing page
- Sept 29
  - user can now change display name and profile photo
  - styling for landing page
- Oct 2
  - working on styling all the dashboard components!
- Oct 3
  - more styling dashboard components
- Oct 6
  - focused on styling and responsive design.
  - found bug in entry list component and how it reacts to firestore realtime updates... found a workaround but i think implementing actual real time updates with actual pagination is kind of beyond my scope.
- Oct 7
  - added react spring animation
  - I think i'm becoming obsessive about this project so I may need to step away.
  </details>

<details>
  <summary>TO DOS (will be deleted)</summary>

- [x] set up basic component structure with static components
  - [x] set up most static layout for dashboard
  - [x] incorporate Redux
    - [x] write reducers for dashboard display
    - [x] incorporate firebase
- [x] develop full CRUD for posts with firestore
  - [x] create new entry
  - [x] view entries on dashboard (Entry, EntryList)
    - [x] display entry list by DATE
    - [x] pagination
      - [x] _infinite scroll_
  - [x] view entry details (EntryDetails)
    - [x] don't forget TIMESTAMP
  - [x] edit/delete entry
    - [x] basic edit functionality
    - [x] basic delete functionality
    - [x] make edit form redirect to entry DETAILS, not dashboard? --> learn about firestore queries lol
  - [x] keyword/hashtag form [react tags?](https://github.com/react-tags/react-tags)
- [x] **keyword collections in firestore**
  - [x] add and update averages for keywords when creating new post
  - [x] autosuggest
  - [x] Keyword component instead of random list elements
  - [x] KeywordDetails component - will have average, list of posts
- [x] figure out toggling between dashboard, form, keyword, and post views --FINISH BY 9/26

---

- [x] create GRAPH with Chart.js
  - [x] Each node should be able to link to a specific post
  - [x] Change timespans
  - [x] Modal on hover
- [x] Routing and landing page
- [x] authentication / authorization
  - [x] may need to change firestore db structure, esp for KEYWORDS -- all entries should have a userId assc w them; keywords may need to be nested in a user document
  - [x] redirecting when logging in not working
  - [x] security rules
- [x] UserControl components
  - [x] form to set displayName
  - [x] profile pic

---

- [ ] UI & styling that is responsive
  - [x] basic dashboard layout & 'global' styling
    - [x] privateroute redirecting
  - [x] navbar
  - [x] chart
    - [x] demo chart on landing page --FINISH BY 10/2
  - [x] new form
    - [x] react tags
    - [x] input range
  - [x] entries
    - [x] entry list
    - [x] entry details
  - [x] chart column
    - [x] date toggle buttons
    - [x] Top 5 keywords
  - [x] keywords
    - [x] keyword pill
    - [x] keyword details
  - [x] user control page (/account)
  - [x] animations
    - [ ] transition into dashboard
    - [x] modal transition
    - [x] scroll up buttons
    - [ ] keywords on topkeywords section?
  - [x] finish about section
  - [x] footer
  - [ ] final theming touches
    - [ ] favicon
  - [x] responsive design
    - [x] NAVBAR
- [ ] readme --FINISH BY 10/9
  - [ ] component diagram

---

stretch goals/bonus features

- [ ] _page to confirm delete?_
- [ ] _weather widget with openWeather?_
- [ ] _reset pw, change email, other user customization options_
- [ ] _limit only one post a day_

</details>

## Technologies Used <a id="technologies"></a>

- React.js
- JavaScript
- Webpack
- JSX
- CSS
- Bootstrap
- Firebase / Firestore

## Setup/Installation Requirements <a id="setup"></a>

Setup requirements

- Make sure [Node.js](https://nodejs.org/en/) and [Node Package Manager (npm)](https://www.npmjs.com/) are set up on your local machine. If not, follow the installation guide [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js).

Installation

- Clone this repository to your machine `$ git clone https://github.com/shanole/moodcloud`
- In the terminal, navigate to the top level of this directory `moodcloud/`
- Recreate project environment and install required dependencies `$ npm install`
- Open project in a development server on your web browser `$ npm start` to open it on http://localhost:3000

## Component Diagrams <a id="diagram"></a>

<details>
  <summary>Component Diagram</summary>

</details>

## Known Bugs <a id="bugs"></a>

## License <a id="license"></a>

_[MIT](https://choosealicense.com/licenses/mit/)_

Copyright (c) 2021 Shannon Lee

## Contact Information <a id="contact"></a>

**_Shannon Lee [mailto](mailto:shannonleehj@gmail.com)_**
