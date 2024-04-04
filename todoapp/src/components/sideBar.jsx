import * as React from 'react';
import TodoForm from './todoForm';
import Cards from './Cards';

import classes from '../styles/todo.module.css';


const PermanentDrawerLeft = () => {

  return (
    <div className={`${classes.home}`}>
      <div>
        <TodoForm />
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
      <Cards />
      </div>
    </div>
  );
}

export default PermanentDrawerLeft;