import firebase from 'firebase';
// Initialize Firebase
//adds a ton of request headers to authenticate
try {
    var config = {
        apiKey: "AIzaSyD6pOoVODGQEguo0wLYKwGBhxLZPz7Rv7s",
        authDomain: "my-todo-app-7b796.firebaseapp.com",
        databaseURL: "https://my-todo-app-7b796.firebaseio.com",
        storageBucket: "my-todo-app-7b796.appspot.com",
        messagingSenderId: "179918050243"
    };
    firebase.initializeApp(config);
} catch(e) {
    console.log(e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;