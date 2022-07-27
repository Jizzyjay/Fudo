import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCwDohSS3tk3MqHasl-HB9okr22bUuWAGs",
    authDomain: "calories-b86c8.firebaseapp.com",
    databaseURL: "https://calories-b86c8-default-rtdb.firebaseio.com",
    projectId: "calories-b86c8",
    storageBucket: "calories-b86c8.appspot.com",
    messagingSenderId: "941657834243",
    appId: "1:941657834243:web:af5a031f44a3ead34f5f36"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };