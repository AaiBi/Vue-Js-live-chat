// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCf-w1WITiPcH36p-uEFe_7UHdbMF5fzKI",
    authDomain: "vue-js-66b92.firebaseapp.com",
    projectId: "vue-js-66b92",
    storageBucket: "vue-js-66b92.appspot.com",
    messagingSenderId: "363164109996",
    appId: "1:363164109996:web:b23bb8e42d90b243726309"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }