import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'

require('firebase/firestore')

Vue.use(VueFirestore)

var firebaseApp = Firebase.initializeApp({
  apiKey:               process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain:           process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:          process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId:            process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket:        process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:    process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:                process.env.VUE_APP_FIREBASE_API_ID
})

export const firestore = firebaseApp.firestore()
