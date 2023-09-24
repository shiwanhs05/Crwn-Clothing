import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import {signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import { SignInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  email: "", 
  password: ""
}
const SignInForm = () => 
{
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
  console.log(email, password);
  console.log("****");
  const resetFormFields = () => 
  {
    setFormFields(defaultFormFields);
  }
  const SignInWithGoogle = async () => {
    const response = await SignInWithGooglePopup();
    const {user} = response;
    await createUserDocumentFromAuth(user);
  }
  const handleChange = (event) => {
    const {name, value} = event.target;
    return setFormFields({...formFields, [name]: value});
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {user}= await signInAuthUserWithEmailAndPassword(email, password);
      if(user) alert("You have Signed In");
      resetFormFields();

    } catch (error) {
      switch(error.code)
      {
        case "auth/invalid-login-credentials": 
          alert("Invalid Credentials");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        default:
          alert(error);
      }
    }
    
  };
  return (
    <div className="sign-in-container">
    <h2>Already have an account?</h2>
    <span>Sign In with your email and password</span>
    <form onSubmit={handleSubmit}>
    <FormInput label={"Email"} name="email" type="email" value={email} onChange={handleChange} required/>
    <FormInput label={"Password"} name="password" type="password" value={password} onChange={handleChange} required/>
    <div className="buttons-container">
    <Button type={"Submit"}>Sign In</Button>
    <Button type={"button"} buttonType={"google"} onClick={SignInWithGoogle}>Google Sign In</Button>
    </div>
    </form>
    </div>
  )
};

export default SignInForm;