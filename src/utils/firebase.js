// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDYnLwP5U-Ci-En6W8oCbc8oigjNSbYdV4",
	authDomain: "netflix-gpt-4f2ec.firebaseapp.com",
	projectId: "netflix-gpt-4f2ec",
	storageBucket: "netflix-gpt-4f2ec.appspot.com",
	messagingSenderId: "778964565097",
	appId: "1:778964565097:web:e87678ddb762d731ff76f8",
	measurementId: "G-GCGH8C95TQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
