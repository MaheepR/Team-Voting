import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyBhfVfpV97gOfdxUSiutjbNBBO9NSTt2ao",
  authDomain: "class-app-f6df3.firebaseapp.com",
  databaseURL: "https://class-app-f6df3-default-rtdb.firebaseio.com",
  projectId: "class-app-f6df3",
  storageBucket: "class-app-f6df3.appspot.com",
  messagingSenderId: "768015098559",
  appId: "1:768015098559:web:5983d3542c6c7a5fe85c0a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
