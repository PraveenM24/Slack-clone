import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD85Z6d6kaTTs-B-HoFlP1qBOm7NoRAglk",
    authDomain: "slack-clo-f0edf.firebaseapp.com",
    projectId: "slack-clo-f0edf",
    storageBucket: "slack-clo-f0edf.appspot.com",
    messagingSenderId: "393569648819",
    appId: "1:393569648819:web:1180d30e63029bcd4ef0c6",
    measurementId: "G-FV6J5XPSPF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;