import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
apiKey: "AIzaSyDwrR1s31Onjy-r4MXbuvqBdbRZulh2JfQ",
authDomain: "mymovies-production.firebaseapp.com",
projectId: "mymovies-production",
storageBucket: "mymovies-production.appspot.com",
messagingSenderId: "806139725755",
appId: "1:806139725755:web:78f3394d69ee04b887269e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
