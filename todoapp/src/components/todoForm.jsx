import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/AddTask';
import TextField from '@mui/material/TextField';
import classes from '../styles/form.module.css';
import classesLogin from '../styles/Login.module.css';
import contract from '../contractInfo/contract';
const TodoForm = () => {
    const [connectedAccount, setConnectedAccount] = useState('null');
    const navigate = useNavigate('');
    const [content, setContent] = useState('');
    useEffect(()=> {
        getConnectedWallet();
        addWalletListener();
    });
    const addWalletListener = async() => {
        //check metamask is installed
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) =>{
                navigate('/');
                setConnectedAccount('');
            })
        } else {
            console.log("Please install Metamask");
        }
    }
    const getConnectedWallet = async() => {
      //check metamask is installed
      if (window.ethereum) {
        try {
        //request user to connect accounts (Metamask will prompt)
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if(accounts.length > 0) {
            setConnectedAccount(accounts[0]);
        } else {
            console.log('There are no connected Accounts !');
            navigate('/');
        }
        //show the first connected account in the react page
        } catch (err) {
            console.log(err.message);
        }
      } else {
        alert('Please download metamask');
      }
    }
    const addNewTask = async(e) => {
        e.preventDefault();
        console.log('adding new task...');
        console.log('content', content);
        try {
            console.log('Adding new task...');
            await contract.methods.createTask(content).send({ from: connectedAccount });
            console.log('Task added successfully');
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div style={{
        height: '80px',
        borderBottom: '2px solid #f1f1f1',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'}}>
        <div ><h2 className={`${classesLogin.header}`}>Welcome</h2></div>
        <div style={{flex:1}}>
            <form style={{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'center',   
            gap:'10px'       
        }}
        onSubmit={addNewTask}>
                <TextField id="input-with-sx" label="New task" variant="standard" value={content} onChange={(e) => setContent(e.target.value)}/>
                <button className={`${classes.addButton}`} type="submit" variant="outlined" startIcon={<AddIcon/>} >
                   <AddIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                </button>
            </form>
        </div>
        <div className="logo">
            {/* Display the connected account */}
            <h2 style={{color:'whitesmoke'}}>{connectedAccount?.substring(0, 6) + "..." + connectedAccount?.substring(38)}</h2>
        </div>
        </div>
    )
}

export default TodoForm;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import AddTaskIcon from '@mui/icons-material/AddTask';
// import AddIcon from '@mui/icons-material/Add';
// import Button from '@mui/material/Button';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import Web3 from 'web3';
// import contract from '../contractInfo/contract';
// import classes from '../styles/form.module.css';
// // set a provider in the sepolia testnet using node rpc url

// // const web3 = new Web3(window.ethereum);
// const TodoForm = () => {
//     const navigate = useNavigate('');

//     const [content, setContent] = useState('');
    
//     useEffect(()=> {
//         getConnectedWallet();
//         addWalletListener();
//     });

//     const addNewTask = async(e) => {
//         e.preventDefault();
//         console.log('adding new task...');
//         console.log('content', content);
//         try {
//             console.log('Adding new task...');
//             await contract.methods.createTask(content).send({ from: connectedAccount });
//             console.log('Task added successfully');
//         } catch (error) {
//             console.error('Error:', error);
//         }

    
//     }
//     const [connectedAccount, setConnectedAccount] = useState('null');
    
//     const getConnectedWallet = async() => {
//       //check metamask is installed
//       if (window.ethereum) {
//         try {
//         //request user to connect accounts (Metamask will prompt)
//         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//         if(accounts.length > 0) {
//             setConnectedAccount(accounts[0]);
//         } else {
//             console.log('There are no connected Accounts !');
//             navigate('/');
//         }
//         //show the first connected account in the react page
//         } catch (err) {
//             console.log(err.message);
//         }
//       } else {
//         alert('Please download metamask');
//       }
//     }

//     const addWalletListener = async() => {
//         //check metamask is installed
//         if (window.ethereum) {
//             window.ethereum.on("accountsChanged", (accounts) =>{
//                 navigate('/');
//                 setConnectedAccount('');
//             })
//         } else {
//             console.log("Please install Metamask");
//         }
//     }
    
//     return (
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'raw', width: '100%', height: '50%' }}>
                
//                 {/* Button to trigger Metamask connection */}
//                 {/* <button onClick={() => getConnectedWallet()}>Connect to Metamask</button> */}

//                 {/* Display the connected account */}
//             <h2>{connectedAccount?.substring(0, 6) + "..." + connectedAccount?.substring(38)}</h2>
//             <h2>Add new task</h2>
//             <form onSubmit={addNewTask}>
//                 <Box style={{ display: 'flex', alignItems: 'center', flexDirection: 'raw', justifyContent: 'space-between'}}>
//                     <Box style={{ display: 'flex', alignItems: 'center'}}>
//                         {/* <AddTaskIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
//                         <TextField id="input-with-sx" label="New task" variant="standard" value={content} onChange={(e) => setContent(e.target.value)}/>
//                     </Box>
//                     <button className={`${classes.addButton}`} type="submit" variant="outlined" startIcon={<AddIcon/>} >
//                     <AddTaskIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
//                     </button>
//                 </Box>
//             </form>
//         </Box>
//     )
// }

// export default TodoForm;

