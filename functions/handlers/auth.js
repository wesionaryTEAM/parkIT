const { admin, db, firebase } = require('../utils/admin');
const { validateSignUPData, validateLoginData } = require('../utils/helper')

exports.signUp = (req, res) => {
    const newUser = {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,

    };

    const { valid, errors } = validateSignUPData(newUser);
    if (!valid)
        return res.status(400).json(errors);
    let token, userId;
    db.collection('users').where('email', '==', newUser.email).get()
        .then(doc => {
            if (doc.exists) {
                return res.status(400).json({ handle: 'The user id already taken' });
            } else {
                return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            }
        }).then(data => {
            userId = data.user.uid
            return data.user.getIdToken();
        }).then(idToken => {
            token = idToken
            const userCredentials = {
                userId,
                email: newUser.email,
                createdAt: new Date().toISOString(),


            }

            db.doc(`/users/${userId}`).set(userCredentials);

        }).then(() => {
            return res.status(201).json({ token })

        })
        .catch(err => {
            if (err.code == 'auth/email-already-in-use') {
                return res.status(400).json({ email: 'Email already exist!' })
            }
            return res.status(500).json({ error: err.message })
        });








}

exports.signIn = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    const { valid, errors } = validateLoginData(user);

    if (!valid) return res.status(400).json(errors)
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            console.log(JSON.stringify(data))
            return data.user.getIdToken();
        }).then(token => {
            return res.json({ token })
        }).catch(err => {
            if (err.code == 'auth/wrong-password' || err.code == 'auth/user-not-found') {
                return res.status(403).json({ message: 'Wrong credentials, Please try again' });
            }
            return res.status(500).json({ error: err.code })
        })





}


//get owner details
exports.getAuthenticatedUser = (req, res) => {
    let userData = {};
    //fetching single data
    db.collection('users').doc(req.user.userId).get()
        .then(doc => {
            if (doc.exists)//checking if document exist or not
            {
                console.log('success',doc.data());
                userData.credentials = doc.data();
                return res.status(200).json(userData);


            }

        })
        .catch(err => {
            console.log('errorsasas',err.message);
            return res.json({ error: err.message })
        })

}











exports.resetPassword = (req, res) => {


    const actionCodeSettings = {

        url: 'https://www.example.com/pagehere',
        // This must be true for email link sign-in.
        handleCodeInApp: true,
        iOS: {
            bundleId: 'com.example.ios'
        },
        android: {
            packageName: 'com.example.android',
            installApp: true,
            minimumVersion: '12'
        },
        // FDL custom domain.
        dynamicLinkDomain: 'coolapp.page.link'
    };

    const userEmail = req.body.email;
    admin.auth().generatePasswordResetLink(userEmail, actionCodeSettings)
        .then((link) => {
            // Construct password reset email template, embed the link and send
            // using custom SMTP server.
            // return sendCustomPasswordResetEmail(email, displayName, link);
        })
        .catch((error) => {
            // Some error occurred.
        });

    // firebase.auth().sendPasswordResetEmail(req.body.email).then(function() {
    //   console.log('email sent!');
    //   return res.status(200).json({message:'A reset email has been sent to your email!'});
    // }).catch(function(err) {
    //     return res.status(404).json({error:err.message});
    // });
}


