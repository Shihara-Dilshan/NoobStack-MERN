import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCMCZKxGIlsgrSY8Gjl2iqVSqO3RY_GldE",
    authDomain: "noobstack.firebaseapp.com",
    databaseURL: "https://noobstack.firebaseio.com",
    projectId: "noobstack",
    storageBucket: "noobstack.appspot.com",
    messagingSenderId: "919050857865",
    appId: "1:919050857865:web:8da26e3ecb823cf3f98558",
    measurementId: "G-LWTQLLY3ET",
};

firebase.initializeApp(firebaseConfig);


const storageRef = firebase.storage().ref();
const storageRef2 = firebase.storage();


export {storageRef, storageRef2, firebase as default};
