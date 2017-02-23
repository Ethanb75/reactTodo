import firebase from 'firebase';
// Initialize Firebase
//adds a ton of request headers to authenticate
try {
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        storageBucket: process.env.STORAGE_BUCKET,
    };
    firebase.initializeApp(config);
} catch(e) {
    console.log(e);
}

//easy way to create a new instance github authentication
export var githubProvider = new firebase.auth.GithubAuthProvider();
export var twitterProvider = new firebase.auth.TwitterAuthProvider();

export var firebaseRef = firebase.database().ref();
export default firebase;