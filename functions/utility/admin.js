//JAKO BITNO
const serviceaccount = require('../socialmediaapp-3fb90-firebase-adminsdk-r46cl-7219f5eb05.json')

const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(serviceaccount),
    databaseURL: 'https://socialmediaapp.firebaseio.com'
});


// admin.initializeApp();

const db=admin.firestore();

module.exports = { admin, db};