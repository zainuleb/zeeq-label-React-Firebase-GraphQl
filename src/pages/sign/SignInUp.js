import React from 'react';
import styles from './SignInUp.module.scss';

import SignIn from '../../Components/signin/SignIn';

const SignInUp = () => {
  return (
    <div className={styles.sign}>
      <SignIn />
    </div>
  );
};

export default SignInUp;
