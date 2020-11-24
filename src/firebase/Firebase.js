// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDUivnQOsdDmO2oTFO6wNKB4NnrNFi80PM",
	authDomain: "portfolio-contacts-3ad97.firebaseapp.com",
	databaseURL: "https://portfolio-contacts-3ad97.firebaseio.com",
	projectId: "portfolio-contacts-3ad97",
	storageBucket: "portfolio-contacts-3ad97.appspot.com",
	messagingSenderId: "726064182552",
	appId: "1:726064182552:web:2dd07700ee5929eeef9a6d",
	measurementId: "G-PSPS356EKM",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
