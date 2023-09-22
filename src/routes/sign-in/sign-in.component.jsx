import { Fragment } from "react";
import { SignInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
const SignIn = () => 
{
  const logGoogleUser = async () => {
    const response = await SignInWithGooglePopup();
    console.log(response);
    const userDocRef = createUserDocumentFromAuth(response.user);

  }
  return<Fragment>
  <h1>This is Sign In Component</h1>
  <button onClick={logGoogleUser}>Click to sign in</button>
  </Fragment>
};
export default SignIn;