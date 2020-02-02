const admin = require("firebase-admin");

var serviceAccount = require("../parkit-0659f73dc150.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gs://parkit-27a48.appspot.com"
})


const db = admin.firestore();

const firebase = require('firebase');

module.exports = { admin, db,firebase};