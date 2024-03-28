import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Web3 from 'web3';
import contract from '../contractInfo/contract';
// set a provider in the sepolia testnet using node rpc url

const web3 = new Web3(window.ethereum);
const TodoForm = () => {

    const [content, setContent] = useState('')

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
    const [connectedAccount, setConnectedAccount] = useState('null');
    
    const connectMetamask = async() => {
      //check metamask is installed
      if (window.ethereum) {
  
        //request user to connect accounts (Metamask will prompt)
        await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        //get the connected accounts
        const accounts = await web3.eth.getAccounts();
  
        //show the first connected account in the react page
        setConnectedAccount(accounts[0]);
      } else {
        alert('Please download metamask');
      }
    }
    
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', height: '50%' }}>
                <>
                {/* Button to trigger Metamask connection */}
                <button onClick={() => connectMetamask()}>Connect to Metamask</button>

                {/* Display the connected account */}
                <h2>{connectedAccount?.substr(0, 6) + "..."}</h2>
                </>
            <h2>Add new task</h2>
            <form onSubmit={addNewTask}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <AddTaskIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="New task" variant="standard" value={content} onChange={(e) => setContent(e.target.value)}/>
                    </Box>
                    <Button type="submit" variant="outlined" startIcon={<AddIcon/>} >
                        Add
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default TodoForm;

