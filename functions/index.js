const { admin, db } = require('./utils/admin')
const functions = require('firebase-functions');
const app = require('express')();//initializaing the app
const firebaseConfig = require('./utils/config')
const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);// Initializing Firebase
const { signIn,signUp,signOut,resetPassword } = require('./handlers/auth');
const authMiddleware = (req, res, next) => {
    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        idToken = req.headers.authorization.split('Bearer ')[1];
    } else {
        console.log('No token found')
        return res.status(403).json({ error: 'Unauthorized!' })
    }
    admin.auth().verifyIdToken(idToken).
        then(decodedToken => {
            req.user = decodedToken;
            return db.collection('users')
                .where('userId', '==', req.user.uid)
                .limit(1)
                .get();
        }).then(data => {
            req.user.userId = data.docs[0].data().userId;
            return next();

        }).catch(err => {
            console.log('token verify error');
            return res.status(403).json({ error: err.message })
        })

}

app.post('/register',signUp);
app.post('/login',signIn);
app.get('/logout',authMiddleware,signOut);
app.post('/forgot-password',resetPassword);




exports.api=functions.https.onRequest(app);