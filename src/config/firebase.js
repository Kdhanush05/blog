
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-0u2ZgEL1EMCxxfnccec6fUrRc8YWwYA",
  authDomain: "blog-app-project-defd3.firebaseapp.com",
  projectId: "blog-app-project-defd3",
  storageBucket: "blog-app-project-defd3.firebasestorage.app",
  messagingSenderId: "610698986510",
  appId: "1:610698986510:web:0bded08f04159249b5e85f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };    