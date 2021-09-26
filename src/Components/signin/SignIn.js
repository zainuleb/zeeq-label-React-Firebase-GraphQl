import React, { useState } from "react";
import styles from "./SignIn.module.scss";

//Import Components
import FormInput from "../forminput/FormInput";
import Button from "../button/Button.js";

//Import Auth
import { signInWithGoogle } from "../../db/firebase/firebase.utils";
import { auth } from "../../db/firebase/firebase.utils";

const SignIn = () => {
  const [signInData, setSignInData] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      auth.signInWithEmailAndPassword(signInData.email, signInData.password);
      setSignInData({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>Already Have an Account?</h2>
      <span>Sign In with your Email and Password</span>

      <form onSubmit={submitHandler}>
        <FormInput
          name="email"
          value={signInData.email}
          label="email"
          handleChange={changeHandler}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="password"
          value={signInData.password}
          handleChange={changeHandler}
          required
        />

        <Button type="submit">Sign In</Button>

        <Button
          onClick={signInWithGoogle}
          /* style={{ backgroundColor: '#4285f4', color: 'white' }} */
          isGoogleSignIn
        >
          Sign In With Google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
