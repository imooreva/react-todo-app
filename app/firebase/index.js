import firebase from 'firebase';

try {
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: "todo-app-e3035",
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: "511031909241"
    };
    firebase.initializeApp(config);
} catch (e) {
    
}

export var firebaseRef = firebase.database().ref();
export default firebase;