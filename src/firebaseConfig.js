import firebase from "firebase/app"
import "firebase/auth"


var firebaseConfig = {
    //TODO Replace with own config file - (DONE Task !)
    // apiKey: "AIzaSyD7KhDYomFFrQE4dHH6DDs-SNK9rfptZ9o",
    // authDomain: "assessment-app-41d0b.firebaseapp.com",
    // databaseURL: "https://assessment-app-41d0b.firebaseio.com",
    // projectId: "assessment-app-41d0b",
    // storageBucket: "assessment-app-41d0b.appspot.com",
    // messagingSenderId: "418813227371",
    // appId: "1:418813227371:web:22828bd50e32150598dc2e"
    apiKey: "AIzaSyAd9aPSLnKonQZUvcDq-EkmWTUBuWMTYEU",
    authDomain: "assessment-app4.firebaseapp.com",
    projectId: "assessment-app4",
    storageBucket: "assessment-app4.appspot.com",
    messagingSenderId: "347794542705",
    appId: "1:347794542705:web:998e88df5ca47441114bd0"
};
firebase.initializeApp(firebaseConfig);
export default firebaseConfig;
