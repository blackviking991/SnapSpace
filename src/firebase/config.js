import "firebase/storage";
import "firebase/firestore";
import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlUUdBmmq3eCwBChCFcFvLXUdhEshT5uA",
  authDomain: "image-hosting-9480b.firebaseapp.com",
  databaseURL: "https://image-hosting-9480b.firebaseio.com",
  projectId: "image-hosting-9480b",
  storageBucket: "image-hosting-9480b.appspot.com",
  messagingSenderId: "516795845708",
  appId: "1:516795845708:web:ae8dbfbe4f810ddde878e9",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export default fire;
export { projectStorage, projectFirestore, timestamp };
