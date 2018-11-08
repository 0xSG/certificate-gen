import * as firebase from "firebase";

export const init = () => {
  var config = {
    apiKey: "AIzaSyDd1nOUq16xjTVQ300G9Sqfg2c-bbq8ttU",
    authDomain: "certificate-5448e.firebaseapp.com",
    databaseURL: "https://certificate-5448e.firebaseio.com",
    projectId: "certificate-5448e",
    storageBucket: "certificate-5448e.appspot.com",
    messagingSenderId: "361973650141"
  };
  firebase.initializeApp(config);
  database = firebase.database();
};
