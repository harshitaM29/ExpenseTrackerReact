import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.amount);
   
    const clickHandler = () => {
        setTitle(100);
        console.log(title)
    } 
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={title} location={props.location} amount={props.amount}   />
            <button onClick={clickHandler}>Change Amount</button>
    </Card>
    );
}

export default ExpenseItem;