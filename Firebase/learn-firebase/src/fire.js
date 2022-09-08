import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3L27d-muUQ9Ni4po7sTo8Ns_hFgbZicU",
    authDomain: "login-5059b.firebaseapp.com",
    databaseURL: "https://login-5059b.firebaseio.com",
    projectId: "login-5059b",
    storageBucket: "login-5059b.appspot.com",
    messagingSenderId: "367140921209",
    appId: "1:367140921209:web:763faeceb719534d1dd9a8"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;