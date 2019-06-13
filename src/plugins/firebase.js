import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'

require('firebase/firestore')

Vue.use(VueFirestore)

var firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyA9LPV-7yPW3IdA3jnBpHVHgk4uDQ2p4b8",
    authDomain: "https://automation-2fcb7.firebaseapp.com",
    databaseURL: "https://automation-2fcb7.firebaseio.com",
    projectId: "automation-2fcb7",
    storageBucket: "automation-2fcb7.appspot.com",
    messagingSenderId: "962323444061",
    appId: "1:962323444061:web:a6594322cddc35ba"
})

export const firestore = firebaseApp.firestore();
