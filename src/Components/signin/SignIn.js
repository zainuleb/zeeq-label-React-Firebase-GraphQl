import React, { useState } from 'react';
import styles from './SignIn.module.scss';

//Import Components
import FormInput from '../forminput/FormInput';
import Button from '../button/Button.js';

//Import Auth
import { signInWithGoogle } from '../../db/firebase/firebase.utils';

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

  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>Already Have an Account?</h2>
      <span>Sign In with your Email and Password</span>

      <form>
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

        <Button
          onClick={signInWithGoogle}
          /*           style={{ backgroundColor: '#4285f4', color: 'white' }} */
          isGoogleSignIn
        >
          Sign In With Google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
