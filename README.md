<img src="logo_updated.png" width="880" height="300">

🚀 React Native Starter 🚀 app that uses all the latest 💯 & greatest 🏅components! - [Demo](#screens)

[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/monte9/react-native-starter/blob/master/LICENSE)

==================================

## Installation

* [Install React-Native](https://facebook.github.io/react-native/docs/getting-started.html#content)

* `git clone git@github.com:Monte9/react-native-starter.git`

* `cd react-native-starter`

* `yarn`


## Running the app

* For iOS, from the command line, run via command: ```react-native run-ios``` or open XCode and load project, Run ```Product -> Run (⌘+R)```

* For android, from the command line, run via the command: ```react-native run-android``` assuming you have an emulator or device running and attached

* To run Jest, ```npm test```

* To debug Jest unit cases, install [node_inspector](https://github.com/node-inspector/node-inspector) and run ```npm run test-chrome```

* Hack on!


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

---------------
# Content

- [Editor Configuration](#editor-configuration)
- [Screens](#screens)
- [Summary](#summary)
- [Technologies](#technologies)
- [Continuous Integration](#continuous-integration)
- [Redux State Management](#redux-state-management)
- [FAQ](#faq)

----------

## Editor Configuration
**Atom**
```bash
apm install editorconfig es6-javascript javascript-snippets linter linter-eslint language-babel
```

**Sublime**
* https://github.com/sindresorhus/editorconfig-sublime#readme
* https://github.com/SublimeLinter/SublimeLinter3
* https://github.com/roadhump/SublimeLinter-eslint
* https://github.com/babel/babel-sublime

**Others**
* [Editorconfig](http://editorconfig.org/#download)
* [ESLint](http://eslint.org/docs/user-guide/integrations#editors)
* Babel Syntax Plugin

## Screens

| Platform| Register     | Login | Profile   |
| :------:| :-------: | :----: | :---: |
| iOS|  ![ios Profile](https://cloud.githubusercontent.com/assets/1282364/11598478/b2b1b5e6-9a87-11e5-8be9-37cbfa478a71.gif)  | ![ios Login](https://cloud.githubusercontent.com/assets/1282364/11598580/6d360f02-9a88-11e5-836b-4171f789a41d.gif)| ![ios Register](https://cloud.githubusercontent.com/assets/1282364/11598582/6d392750-9a88-11e5-9839-05127dfba96b.gif)  |
| Android |![Android Register](https://cloud.githubusercontent.com/assets/1282364/11598579/6d3487b8-9a88-11e5-9e95-260283a6951e.gif)    | ![Android Login](https://cloud.githubusercontent.com/assets/1282364/11598577/6d2f140e-9a88-11e5-8cd4-1ba8c9cbc603.gif)   |  ![Android Profile](https://cloud.githubusercontent.com/assets/1282364/11598578/6d314ee0-9a88-11e5-9a6c-512a313535ee.gif) |


----------

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
1. **Jest Unit Tests cover ~90%** of the application statements.
1. Demonstrates how to **setup React-Native to perform Jest testing** with Mock modules
1. Includes ability to **debug Jest unit tests** with Chrome
1. Instructions and videos for **continuous integration with Bitrise.io**

----------

## Technologies
*The following are brief descriptions of the technologies used*

### [React-Native](https://facebook.github.io/react-native/)
*React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React.*

What more can I say?  It's a fantastic leap forward in providing the ability to write native applications with Javascript that target both iOS and Android.

This application provides one code base that works on both platforms.  It demonstrates Form interactions,  Navigation, and use of many other components.

###[Jest](https://facebook.github.io/jest/)
*85 Unit tests that cover plain objects and JSX components*

The de-facto standard for React/Native testing.  This app demonstrates how to mock **ReactNative, node_modules, classes** and to properly **test JSX components** by programmatically changing the props, and throughly **test the applications data state and the actions** in conjunction with Redux.

![Jest Coverage Analysis](https://cloud.githubusercontent.com/assets/1282364/17187737/19524234-5400-11e6-8350-53e653a4c1f6.png)

###[Redux](http://redux.js.org/)
*Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.*

Before Redux, application state was managed by all the various components in the app.  Now, the state is managed in a **predictable and consistent manner** and it can be **tested with Jest** and best of all, it is **independent** of the UI.  This is a major advancement in application design!

###[TComb](https://github.com/gcanti/tcomb-form-native)
*A structured model based approach to declarative forms*

*With this library, you **simplify form processing** incredibly!  Write a lot **less code**, get **usability** and **accessibility for free** (automatic labels, inline validation, etc) and no need to update forms when domain model changes.  This application **demonstrates how to test these forms** also!

###[Validate.js](http://validatejs.org/)
*Validate.js provides a declarative way of validating javascript objects.*

Using Validate.js for the Form processing was a breeze!  And with the ability to test the validations to the Redux state was very easy!

---------------

## Continuous Integration

CI proves to the developer that everything required to build and test
the application is well defined and repeatable.  Without CI, one would
not know, for a fact, that all the required tools and assests are
available for everyone to build with.  CI gives us developers some
"peace of mind" that our build process is repeatable.

Setting up CI with Bitrise.io coming soon..

-------------

## Redux State Management

If you'd like to read an excellent tutorial on Redux check this out: [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)

-------------

## FAQ

### Are you accepting PR's?

Yes. This project is actively under development. PR's are much appreciated.

######-Monte Thakkar
