import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCTUJz5JGRyxk_GddTTFfkIoL5NpFMYil8",
    authDomain: "authapp-5d294.firebaseapp.com",
    projectId: "authapp-5d294",
    storageBucket: "authapp-5d294.appspot.com",
    messagingSenderId: "284031493813",
    appId: "1:284031493813:web:697edcf81b8bfe420900fc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth