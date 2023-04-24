import React,{useState} from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

function ExpenseItem(props){
    const [title,setTitle]=useState(props.title);
    const [amount,setAmount]=useState(props.amount);
    
    const clickHandler=()=>{
      setTitle( 'Updated!');
      setAmount( '100$ ');
    }
    
    return (
        <Card className='expense-item' id={props.id}>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price '>{amount}</div>
                
            </div>
            
            <button onClick={clickHandler}>Update Expense</button>
        </Card>
    );
}

export default ExpenseItem;
