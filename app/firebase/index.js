import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyDGWkndPmIvtprXrLNNZQGMfhFeIxLlKrE",
        authDomain: "react-todo-app-1fce7.firebaseapp.com",
        databaseURL: "https://react-todo-app-1fce7.firebaseio.com",
        projectId: "react-todo-app-1fce7",
        storageBucket: "react-todo-app-1fce7.appspot.com",
        messagingSenderId: "305313576419"
    };
    firebase.initializeApp(config);
} catch (e) {
    
}

export var firebaseRef = firebase.database().ref();
export default firebase;