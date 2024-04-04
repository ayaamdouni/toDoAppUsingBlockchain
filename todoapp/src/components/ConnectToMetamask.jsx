import { useState } from 'react';
import { Web3 } from 'web3';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import classes from '../styles/Login.module.css';

const ConnectToMetamask = () => {
  //state to store and show the connected account
  const [connectedAccount, setConnectedAccount] = useState('null');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate('');

  const connectMetamask = async() => {
    //check metamask is installed
    if (window.ethereum) {
      // instantiate Web3 with the injected provider
      // const web3 = new Web3(window.ethereum);

      //request user to connect accounts (Metamask will prompt)
      try{
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        //get the connected accounts

        //show the first connected account in the react page
        setConnectedAccount(accounts[0]);
        navigate('/todoapp')
        localStorage.addItem('')
      } catch(err) {
        setErrorMessage("Request Rejected !");
        // <Alert severity="error">Request Rejected !</Alert>
        console.error(err);
      }
    } else {
      alert('Please download metamask');
    }
  }
  

  return (
    <>
      <button onClick={() => connectMetamask()} className={`${classes.connectButton}`}><span className={`${classes.logosMetamaskIcon}`}></span> CONNECT</button>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      {/* Display the connected account */}
      {/* <h2>{connectedAccount}</h2> */}
    </>
  );
}

export default ConnectToMetamask;