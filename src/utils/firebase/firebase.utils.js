// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth"; 
import {getFirestore, doc, getDoc, setDoc, Firestore} from "firebase/firestore";
// doc => instance of document, retrieve documents stored in the firestore database.
// getDoc, setDoc => get and set the Document's data.

const firebaseConfig = {
  apiKey: "AIzaSyBjB4_rBnKIIQNkeifI31LaX0FZcBsDpok",
  authDomain: "crwn-clothing-db-f62fa.firebaseapp.com",
  projectId: "crwn-clothing-db-f62fa",
  storageBucket: "crwn-clothing-db-f62fa.appspot.com",
  messagingSenderId: "974471629125",
  appId: "1:974471629125:web:d6855e45099527146f562c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => 
{
  const {uid} = userAuth;
  // Reference to the document in the firestore database
  const userDocRef = doc(db, "users", uid);
  // getDoc(), setDoc() returns a promise
  const userSnapshot = await getDoc(userDocRef);
  // if user data exists => return userDocRef
  // if user data doesn't exists => create/set the 
  // document with data from userAuth in my collection  
  if(!userSnapshot.exists())
  {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try
    {
      await setDoc(userDocRef, {
        displayName, 
        email,
        createdAt
      })
    }
    catch(error)
    {
      console.log("Error while creating the user", error.message);
    }
  }
  return userDocRef;

}