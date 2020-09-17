import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRk9iY-KymfxRFrZDPfqbiFkYDqr5VJ_Y',
  authDomain: 'react-slack-f7896.firebaseapp.com',
  databaseURL: 'https://react-slack-f7896.firebaseio.com',
  projectId: 'react-slack-f7896',
  storageBucket: 'react-slack-f7896.appspot.com',
  messagingSenderId: '969430923199',
  appId: '1:969430923199:web:e0f19d1cc71930d336130a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
//a
export const signInWithGoogle = () => {
  //initialize google provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  //ask user to select gmail acc in a new pop window
  auth.signInWithPopup(googleProvider);
};
//store the data of user in firestore which is online db  which stores data in json format
