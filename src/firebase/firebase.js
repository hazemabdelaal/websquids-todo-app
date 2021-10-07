import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDxch9fUrHGfeShFyB0_M6eQiYAy6YcLcI',
  authDomain: 'todo-websquids-test.firebaseapp.com',
  projectId: 'todo-websquids-test',
  storageBucket: 'todo-websquids-test.appspot.com',
  messagingSenderId: '640706184335',
  appId: '1:640706184335:web:80a6965b74a4f8dc3e9cfa',
  measurementId: 'G-FJ3P4561Q0',
});

const db = firebaseApp.firestore();

export default db;
