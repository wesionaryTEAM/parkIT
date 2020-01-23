import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBfQz155G_Mtkxep2PIDzh0ScvONXJ092M",
    authDomain: "park-it-a32d4.firebaseapp.com",
    databaseURL: "https://park-it-a32d4.firebaseio.com",
    projectId: "park-it-a32d4",
    storageBucket: "park-it-a32d4.appspot.com",
    messagingSenderId: "561114454756",
    appId: "1:561114454756:web:db5f3676082fc5c2ddeaf1",
    measurementId: "G-VD0P66STK0"
  };

  const db = firebase.initializeApp(firebaseConfig);

  export default db;