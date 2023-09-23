import { Fragment } from "react";
import SignUpForm from "../../components/sign-up-from/sign-up-form.component";
import { auth, SignInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
// auth = singleton memory which stores  authentication state of the whole app
const SignIn = () => 
{
  const logGoogleUser = async () => {
    const response = await SignInWithGooglePopup();
    const {user} = response;
    const userDocRef = createUserDocumentFromAuth(user);
  }
  
  return<Fragment>
  <h1>This is Sign In Component</h1>
  <button onClick={logGoogleUser}>Click to sign in pop up</button>
  <SignUpForm/>
  </Fragment>
};
export default SignIn;