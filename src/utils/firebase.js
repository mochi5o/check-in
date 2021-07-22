import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_firebaseAPIKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_firebaseAppId
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export { auth, db }
export default firebaseApp
