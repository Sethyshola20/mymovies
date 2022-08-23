import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
apiKey: "AIzaSyBt84XGWSj7VsaTnfmcblCpSIkjcwamfgk",
authDomain: "mymovies-development.firebaseapp.com",
projectId: "mymovies-development",
storageBucket: "mymovies-development.appspot.com",
messagingSenderId: "1094873268006",
appId: "1:1094873268006:web:804a1030da1770d35bcbe7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
