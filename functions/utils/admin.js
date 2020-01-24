const admin = require("firebase-admin");
admin.initializeApp({
    storageBucket: "gs://parkit-27a48.appspot.com"
})
const db = admin.firestore();

const firebase = require('firebase');

module.exports = { admin, db,firebase};