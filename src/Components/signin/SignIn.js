import React, { useState } from 'react';
import styles from './SignIn.module.scss';

import FormInput from '../forminput/FormInput';
import Button from '../button/Button.js';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  /*   console.log(email, password); */

  /*   const handleSubmit = (e) => {
    e.preventDefault();
  };
 */
  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>Already Have an Account?</h2>
      <span>Sign In with your Email and Password</span>

      <form /* onSubmit={handleSubmit} */>
        <FormInput
          name="email"
          value={email}
          label="email"
          handleChange={handleEmailChange}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handlePasswordChange}
          required
        />

        <Button type="submit" value="Submit Form">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
