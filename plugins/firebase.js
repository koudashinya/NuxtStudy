import firebase from "firebase/app"

if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: "AIzaSyDezFVBBiixT2wG-druHfrp1VimapV7SRs",
  authDomain: "sample-c4f7c.firebaseapp.com",
  projectId: "sample-c4f7c",
  storageBucket: "sample-c4f7c.appspot.com",
  messagingSenderId: "289920579051",
  appId: "1:289920579051:web:c9420fe4667bc8629195ae",
  measurementId: "G-1HZKTX0N0G"
})
}

export default firebase