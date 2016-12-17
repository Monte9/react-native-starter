<img src="logo_header.png" width="880" height="300">

 React Native Starter  app that uses all the latest  & greatest components! - [Demo](#screens)

[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/monte9/react-native-starter/blob/master/LICENSE)

---------------

## [Screens](#screens)

<img src="screenshots/login_both.png" width="600" height="559">

<img src="screenshots/signup_both.png" width="600" height="559">

| Platform| Register     | Login | Profile   |
| :------:| :-------: | :----: | :---: |
| iOS|  ![ios Profile](https://cloud.githubusercontent.com/assets/1282364/11598478/b2b1b5e6-9a87-11e5-8be9-37cbfa478a71.gif)  | ![ios Login](https://cloud.githubusercontent.com/assets/1282364/11598580/6d360f02-9a88-11e5-836b-4171f789a41d.gif)| ![ios Register](https://cloud.githubusercontent.com/assets/1282364/11598582/6d392750-9a88-11e5-9839-05127dfba96b.gif)  |
| Android |![Android Register](https://cloud.githubusercontent.com/assets/1282364/11598579/6d3487b8-9a88-11e5-9e95-260283a6951e.gif)    | ![Android Login](https://cloud.githubusercontent.com/assets/1282364/11598577/6d2f140e-9a88-11e5-8cd4-1ba8c9cbc603.gif)   |  ![Android Profile](https://cloud.githubusercontent.com/assets/1282364/11598578/6d314ee0-9a88-11e5-9a6c-512a313535ee.gif) |

---------------

## Installation

* [Install React-Native](https://facebook.github.io/react-native/docs/getting-started.html#content)

* `git clone git@github.com:Monte9/react-native-starter.git`

* `cd react-native-starter`

* `yarn`


## Running the app

* For iOS, from the command line, run via command: ```react-native run-ios``` or open XCode and load project, Run ```Product -> Run (⌘+R)```

* For android, from the command line, run via the command: ```react-native run-android``` assuming you have an emulator or device running and attached

* Hack on!

---------------

# Content

- [Summary](#summary)
- [Technologies](#technologies)
- [Editor](#editor)
- [Notes](#notes)
- [FAQ](#faq)


## Summary

1. The application runs on **both iOS and Android** with a **single code** base
1. A User can **Register, Login, Logout, Reset their Password** and modify their **Profile**
1. The Forms display messages for **help and field validation**.
1. The Forms are **protected** when fetching.
1. The Forms display **spinner** when fetching.
1. Form submission **errors are displayed** (see above Login)
1. **All state changes*** are actions to the Redux store.
1. The backend is provided by either a Hapi server or Parse server using the **Rest API**
1. **Every action** performed by the UI interfaces with the **Redux actions** and subsequently to the Redux Store.  This **reduces the complexity** of the JSX Components **tremendously**and makes them easily testable.


## Technologies
*The following are brief descriptions of the technologies used*

### [React-Native](https://facebook.github.io/react-native/)

###[Redux](http://redux.js.org/)

If you'd like to read an excellent tutorial on Redux check this out: [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)

###[React Native Screens](https://github.com/browniefed/react-native-screens)
*React Native implementation for Do, a free UI kit. You can see the entire DO library on invision [here:](https://www.invisionapp.com/do)*

###[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
*React Native Icons*

###[React Native Side Menu](https://github.com/react-native-community/react-native-side-menu)
*Side menu component for React Native*

###[React Native Tab Navigator]* - Tab Bar component for React Native*
<a href="https://github.com/exponentjs/react-native-tab-navigator>"<img src="screenshots/login_both.png" width="600" height="559"></a>

Active contributor on React Native Screens repo. Submitted PR's for Login & Signup screens.

###[Validate.js](http://validatejs.org/)


## Editor Configuration

**Atom**

<img src="screenshots/atom_editor.png" width="600" height="444">

**Package:** Nuclide

**UI Theme:** One Dark

**Syntax Theme:** Gloom

**Additional Packages:**
```bash
apm install editorconfig es6-javascript javascript-snippets linter linter-eslint language-babel
```

## Notes

Code is written to [JS Standard](https://github.com/feross/standard) and validated with [Eslint](http://eslint.org/).  To setup your favorite editor using the Eslint configuration, see [Editors](http://eslint.org/docs/user-guide/integrations#editors)

Navigation is handled with [React Native Router Flux](https://github.com/aksonov/react-native-router-flux).  Multiple scenes support **Login, Register, and Reset Password**.  Once successfully logged in, there are 3 more scenes: **Logout, Subview, and Profile**.

A user can **change** their **Email Address** and **User Name** once they are logged in using the **Profile** form.

The icons used throughout the app are from [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons), namely using **FontAwesome**

**Form building** is extremely easy and consistent by using [Tcomb Form Library](https://github.com/gcanti/tcomb-form-native) by using **domain models** and writing less code.

Using [Redux](https://github.com/reactjs/react-redux) and [Immutable](https://facebook.github.io/immutable-js/), the state of the application is **testable** with [Jest](https://facebook.github.io/jest/), which includes [Snapshot tests](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html) currently with 85 tests and ~90% coverage!!!  

Using the [Validate.JS](https://validatejs.org/) Library, all **user input is validated**.  Appropriate messages are displayed to the user guiding them in the input requirements.

Once a user is logged in, their **Session State is stored** in [AsyncStorage](https://github.com/jasonmerino/react-native-simple-store) so that subsequent usage does not require logging in again.

Snowflake supports **multiple languages** using [I18n](https://github.com/AlexanderZaytsev/react-native-i18n) with English, French and Spanish.

Snowflake supports **Hot Reloading** of its state.  

Snowflake uses CI with [Bitrise.io]( https://www.bitrise.io) and has **extensive docs and 45+ min of video** demonstating implementation.


## FAQ

### Are you accepting PR's?

Yes. This project is actively under development. PR's are much appreciated.

######-Monte Thakkar
