// import * as firebase from 'firebase/app'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyDezFVBBiixT2wG-druHfrp1VimapV7SRs",
  authDomain: "sample-c4f7c.firebaseapp.com",
  projectId: "sample-c4f7c",
  storageBucket: "sample-c4f7c.appspot.com",
  messagingSenderId: "289920579051",
  appId: "1:289920579051:web:c9420fe4667bc8629195ae",
  measurementId: "G-1HZKTX0N0G"
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const functions = firebase.functions()

// nuxtの書き方、どこでも使えるように
export default function (app, inject) {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  inject('firebase', firebase)
  inject('firestore', firebase.firestore())
  inject('fireAuth', firebase.auth())
  inject('fireStorage', firebase.storage())
  inject('functions', firebase.functions())
}