import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAJR3rB63ZOgBg7l7hqD5pCV0vWgaGvzgk',
  authDomain: 'bart-chat-app.firebaseapp.com',
  databaseURL: 'https://bart-chat-app.firebaseio.com',
  projectId: 'bart-chat-app',
  storageBucket: 'bart-chat-app.appspot.com',
  messagingSenderId: '913327600514',
  appId: '1:913327600514:web:674103c5edfc4b9dc5959b'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
