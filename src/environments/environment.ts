// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
  	apiKey: "AIzaSyAZIu7CiKzAo4xLrKW2tagaTwepi9LIXPI",
    authDomain: "mybooks-4a613.firebaseapp.com",
    databaseURL: "https://mybooks-4a613.firebaseio.com",
    projectId: "mybooks-4a613",
    storageBucket: "mybooks-4a613.appspot.com",
    messagingSenderId: "360476427893"
  }
};
