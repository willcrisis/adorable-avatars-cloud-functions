# Adorable Avatars on Cloud Functions

After `https://api.adorable.io` has been taken down on Oct 14th, 2020, I decided to find a way of being able to continue using Adorable Avatars on a free-hosted server. 

Firebase Functions have the ability to run an Express server, and since this would not have heavy usages which could lead me to undesired costs, I decided to deploy on it.

## Requirements

In order to be able to deploy your own Adorable Avatars API, you will need the following:

* Have [Firebase CLI](https://firebase.google.com/docs/cli) installed and logged in (run `firebase login` after it's installed)
* NodeJS 10 (I recommend using [NVM](https://github.com/nvm-sh/nvm) to install. It needs to be version 10, otherwise Firebase will fail)

## How to use

* Create a new Firebase project in [Firebase Console](https://console.firebase.google.com/)
* Clone this repo
* Change the project key in `.firebaserc` to match your newly created project's one
* Inside `functions` folder, run `npm install` or `yarn`
* To test locally, run `npm run serve` or `yarn serve`
* To deploy the function, run `firebase deploy`

After deploying, the API will be available at `https://<firebase-functions-generated-url>/avatars/:size/:id`