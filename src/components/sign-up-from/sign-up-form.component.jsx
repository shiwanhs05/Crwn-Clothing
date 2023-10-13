import { useState } from "react";

import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import { Container, Heading } from "./sign-up-form.styles";

import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "", 
  email: "", 
  password: "", 
  confirmPassword: ""
}
const SignUpForm = () => 
{
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const {name, value} = event.target;
    return setFormFields({...formFields, [name]: value});
  };
  const resetFormFields = () => 
  {
    setFormFields(defaultFormFields);
  }
  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    if(password !== confirmPassword)
    {
      alert("passwords do not match");
      return;
    }
    
    try 
    {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) 
    {
      if(error.code === "auth/email-already-in-use")
      {
        alert("Cannot create user, email already in use");
      }

      else console.log("user creation encountered an error", error);
    }
    
  }
  return (
    <Container>
    <Heading>Don't have an account</Heading>
    <span>Sign Up with your email and password</span>
    <form onSubmit={handleSubmit}>
    <FormInput label={"Display Name"} name="displayName" value={displayName} onChange={handleChange}  type="text" required />
    <FormInput label={"Email"} name="email" value={email} onChange={handleChange}  type="email" required />
    <FormInput label={"Password"} name="password" onChange={handleChange} value={password}  type="password" required />
    <FormInput label={"Confirm Password"} name="confirmPassword" onChange={handleChange} value={confirmPassword}  type="password" required />
    <Button type="submit">Sign Up</Button>
    </form>
    </Container>
  );
};
export default SignUpForm;