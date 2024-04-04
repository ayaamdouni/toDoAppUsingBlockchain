import * as React from 'react';

import classes from '../styles/Login.module.css';
import ConnectToMetamask from './ConnectToMetamask';
const Login = () => {
  return (
    <>
    <div className={`${classes.home}`}>
      <div><h3 className={`${classes.title}`}>Welcome to TO DO ETH</h3></div>
      <div className={`${classes.loginBox}`}>
        <h2 className={`${classes.header}`}>Connect to your Wallet</h2>
        <ConnectToMetamask/>
      </div>
    </div>
    </>
  );
}

export default Login;