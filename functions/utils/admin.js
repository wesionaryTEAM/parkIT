const admin = require("firebase-admin");
admin.initializeApp({
    storageBucket: "gs://parkit-27a48.appspot.com"
})
const db = admin.firestore();

module.exports = { admin, db }