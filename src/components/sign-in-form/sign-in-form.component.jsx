import { useState } from "react";

import {signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";

import { SignInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import {Container, Heading, ButtonsContainer} from "./sign-in-form.styles";

const defaultFormFields = {
  email: "", 
  password: ""
}
const SignInForm = () => 
{
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
  const resetFormFields = () => 
  {
    setFormFields(defaultFormFields);
  }
  const SignInWithGoogle = async () => {
    await SignInWithGooglePopup();
  }
  const handleChange = (event) => {
    const {name, value} = event.target;
    return setFormFields({...formFields, [name]: value});
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
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
    <Container>
    <Heading>Already have an account?</Heading>
    <span>Sign In with your email and password</span>
    <form onSubmit={handleSubmit}>
    <FormInput label={"Email"} name="email" type="email" value={email} onChange={handleChange} required/>
    <FormInput label={"Password"} name="password" type="password" value={password} onChange={handleChange} required/>
    <ButtonsContainer>
    <Button type={"Submit"}>Sign In</Button>
    <Button type={"button"} buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle}>Google Sign In</Button>
    </ButtonsContainer>
    </form>
    </Container>
  )
};

export default SignInForm;