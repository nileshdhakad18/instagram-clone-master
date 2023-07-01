import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBuqoucGtnSilZ2i4wniTXu41ERqU3fdVk',
  authDomain: 'instagram-a185f.firebaseapp.com',
  projectId: 'instagram-a185f',
  storageBucket: 'instagram-a185f.appspot.com',
  messagingSenderId: '303988198206',
  appId: '1:303988198206:web:1101876e9de238906f3a6f'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// seedDatabase(firebase);

export { firebase, FieldValue };
