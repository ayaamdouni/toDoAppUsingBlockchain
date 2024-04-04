import React, { useEffect, useState } from 'react';
import classes from '../styles/Card.module.css'; 
import Card from './Card';
import contract from '../contractInfo/contract';



const Cards = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const taskCount = await contract.methods.taskCount().call();
    const fetchedTasks = [];
    for (let i =1; i<= taskCount; i++) {
      try {
        console.log('Adding new task...');
        const task = await contract.methods.tasks(i).call();
        console.log('Task at index 1:', task);
        fetchedTasks.push(task);
        } catch (error) {
        console.error('Error:', error);
        }
  
    }
    setTasks(fetchedTasks);
  }
  useEffect(()=> {
    getTasks();
  },)
  return (
    
    <div className={`${classes.Cards}`}>
      {tasks.map(task => (
        <Card key={task.id} content={task.content} id={task.id} completed = {task.completed}/>
      ))} 
    </div>
  );
}

export default Cards;
