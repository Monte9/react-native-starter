<img src="logo_header.png" width="880" height="300">

🚀 React Native 🚀 starter app that uses all the latest 💯 & greatest 🏅 components! - [Screens](#screens) & [Demo](#demo)

[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/monte9/react-native-starter/blob/master/LICENSE)

---------------

# [Screens](#screens)

## Login & Signup

| Platform| Login     | Signup |
| :------:| :-------: | :----: |
| iOS|  <img src="screenshots/screens/login_ios.png" width="376" height="668">  | <img src="screenshots/screens/signup_ios.png" width="376" height="668">|
| Android | <img src="screenshots/screens/login_android.png" width="334" height="594"> | <img src="screenshots/screens/signup_android.png" width="334" height="594"> |

<br />

## SideMenu

| Platform| SideMenu     |
| :------:| :-------: |
| iOS|  <img src="screenshots/screens/sidemenu_ios.png" width="376" height="668"> |
| Android | <img src="screenshots/screens/sidemenu_android.png" width="334" height="594"> |

<br />

## Tab Bar 1: Feed

| Platform| Feed     | Explore |
| :------:| :-------: | :----: |
| iOS|  <img src="screenshots/screens/feed_1_ios.png" width="376" height="668">  | <img src="screenshots/screens/explore_ios.png" width="376" height="668">|
| Android | <img src="screenshots/screens/feed_1_android.png" width="334" height="594"> | <img src="screenshots/screens/explore_android.png" width="334" height="594"> |

<br />

## Tab Bar 2: Portfolio

| Platform| Portfolio     | Reload |
| :------:| :-------: | :----: |
| iOS|  <img src="screenshots/screens/portfolio_ios.png" width="376" height="668">  | <img src="screenshots/screens/reload_ios.png" width="376" height="668">|
| Android | <img src="screenshots/screens/portfolio_android.png" width="334" height="594"> | <img src="screenshots/screens/reload_android.png" width="334" height="594"> |

<br />

## Tab Bar 3: Profile

| Platform| Profile     | History |
| :------:| :-------: | :----: |
| iOS|  <img src="screenshots/screens/profile_ios.png" width="376" height="668">  | <img src="screenshots/screens/history_ios.png" width="376" height="668">|
| Android | <img src="screenshots/screens/profile_android.png" width="334" height="594"> | <img src="screenshots/screens/history_android.png" width="334" height="594"> |

<br />

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
- [Screens](#screens)
- [Demo](#demo)
- [Editor Setup](#editor-setup)
- [TODO](#todo)
- [FAQ](#faq)

<br />

## Summary

1. The app is runs on **BOTH** iOS & Android using a single codebase mostly written in Javascript.
1. The app has Login & Signup screens with reducers for user input, login & signup actions.
1. The Login & Signup screens display a spinner to indicate activity.
1. The app includes a Tab Bar Controller and is customizable to add more tabs.
1. Each Tab Bar has it's own navigation state and hence can provide independent navigation states.
1. The app uses Navigation Experimental to handle navigation.
1. The app also includes a Side Menu and it's customizable.

<br />

## Technologies
*The following are brief descriptions of the technologies used*

### [React-Native](https://facebook.github.io/react-native/)

**Learn once, write anywhere: Build mobile apps with React**

<a href="https://facebook.github.io/react-native/"><img src="screenshots/react-native.png" width="850" height="186.72" border-style="solid" border-color="#ff0000"></a>

<br />

###[Redux](http://redux.js.org/)

**Redux is a predictable state container for JavaScript apps.**

<a href="http://redux.js.org/"><img src="screenshots/redux.png" width="850" height="126.72"></a>

If you'd like to read an excellent tutorial on Redux check this out: [https://egghead.io/courses/getting-started-with-redux](https://egghead.io/courses/getting-started-with-redux)

<br />

###[React Native Navigation Experimental](https://facebook.github.io/react-native/docs/navigation.html#navigationexperimental)

**If you are looking for greater control over your navigation stack, you can't go wrong with NavigationExperimental.**

<a href="https://facebook.github.io/react-native/docs/navigation.html#navigationexperimental"><img src="screenshots/react-native-nav-exp.png" width="850" height="231"></a>

<br />

###[React Native Tab Navigator](https://github.com/exponentjs/react-native-tab-navigator)

**Tab Bar component for React Native**

<a href="https://github.com/exponentjs/react-native-tab-navigator"><img src="screenshots/react-native-tab-navigator.png" width="850" height="90.85"></a>

<br />

###[React Native Side Menu](https://github.com/react-native-community/react-native-side-menu)

**Side menu component for React Native**

<a href="https://github.com/react-native-community/react-native-side-menu"><img src="screenshots/react-native-side-menu.png" width="850" height="130"></a>

<br />

###[React Native Elements](https://github.com/react-native-community/react-native-elements)

**React Native Elements UI Toolkit**

<a href="https://github.com/react-native-community/react-native-elements"><img src="screenshots/react-native-elements.png" width="850" height="130"></a>

<br />

###[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)

**3000 Customizable Icons for React Native with support for NavBar/TabBar/ToolbarAndroid, image source and full stying.**

<a href="https://github.com/oblador/react-native-vector-icons"><img src="screenshots/react-native-vector-icons.png" width="850" height="143.72"></a>

<br />

###[React Native Screens](https://github.com/browniefed/react-native-screens)

**React Native implementation for Do, a free UI kit.**

<a href="https://github.com/browniefed/react-native-screens"><img src="screenshots/react-native-screens.png" width="850" height="95.3"></a>

<br />


# [Demo](#demo)

| Platform|  iOS    | Android    |
| :------:| :-------: | :----: |
| Demo |  ![ios Demo](screenshots/demo/demo_ios.gif)  | ![android Demo](screenshots/demo/demo_android.gif) |

<br />

## Editor Setup

**Atom**

<img src="screenshots/atom_editor.png" width="600" height="270">

**Package:** Nuclide

**UI Theme:** One Dark

**Syntax Theme:** Gloom

**Additional Packages:**
```bash
apm install editorconfig es6-javascript javascript-snippets linter linter-eslint language-babel
```

<br />

## TODO

- [AsyncStorage](https://github.com/jasonmerino/react-native-simple-store)

- [Facebook Login](https://github.com/facebook/react-native-fbsdk)

- [Twitter Login](https://github.com/fullstackreact/react-native-oauth)

- [I18n](https://github.com/AlexanderZaytsev/react-native-i18n)

- [Validate.JS](https://validatejs.org/)

- [Tcomb Form Library](https://github.com/gcanti/tcomb-form-native)

- [Jest](https://facebook.github.io/jest/) & [Snapshot tests](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html)

<br />

## FAQ

### Are you accepting PR's?

Yes. This project is actively under development. PR's are much appreciated.

###### "Work is it's own reward!" -Monte Thakkar
