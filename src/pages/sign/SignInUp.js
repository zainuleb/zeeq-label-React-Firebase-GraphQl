import React from "react";
import styles from "./SignInUp.module.scss";

import SignIn from "../../Components/signin/SignIn";
import SignUp from "../../Components/signUp/SignUp";

const SignInUp = () => {
  return (
    <div className={styles.sign}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
