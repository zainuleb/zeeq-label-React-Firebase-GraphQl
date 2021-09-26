import React, { useState } from "react";
import styles from "./SignUp.module.scss";

import {
  auth,
  createUserProfileDocument,
} from "../../db/firebase/firebase.utils";

import FormInput from "../forminput/FormInput";
import Button from "../button/Button";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    displayName: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  const changeHandler = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (signUpData.password !== signUpData.cnfPassword) {
      alert("Password Dont Match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        signUpData.email,
        signUpData.password
      );

      const displayName = signUpData.displayName.toString();
      await createUserProfileDocument(user, { displayName });

      setSignUpData({
        displayName: "",
        email: "",
        password: "",
        cnfPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.signUp}>
      <h2 className={styles.title}>Dont Have an Account?</h2>
      <span>Sign Up with Email and Password</span>
      <form className={styles.signUpForm} onSubmit={submitHandler}>
        <FormInput
          type="text"
          name="displayName"
          value={signUpData.displayName}
          handleChange={changeHandler}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="text"
          name="email"
          value={signUpData.email}
          handleChange={changeHandler}
          label="Email"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          value={signUpData.password}
          handleChange={changeHandler}
          label="Password"
          required
        ></FormInput>
        <FormInput
          type="password"
          name="cnfPassword"
          value={signUpData.cnfPassword}
          handleChange={changeHandler}
          label="Confirm Password"
          required
        ></FormInput>
        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
};

export default SignUp;
