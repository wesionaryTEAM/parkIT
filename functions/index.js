const { admin, db } = require('./utils/admin')
const functions = require('firebase-functions');
const app = require('express')();//initializaing the app
const firebaseConfig = require('./utils/config')
const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);// Initializing Firebase
app.get('/getData', (request, response) => {
    console.log('DB',db);
    console.log('Admin',admin);
    return response.json('helo world here');
    



});




exports.api=functions.https.onRequest(app);