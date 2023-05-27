import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () =>
{
    const [enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    const updateTitle = (e) =>{
        setEnteredTitle(e.target.value)
    }

    const updateAmount = (e) =>{
        setEnteredAmount(e.target.value)
    }

    const updateDate = (e) =>{
        setEnteredDate(e.target.value)
    }
    return (
         <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Expense Title</label><br />
                <input type="text" id="title" onChange={updateTitle}/>
            </div>
            <div className='new-expense__control'>
                <label>Expense Amount</label><br />
                <input type="number" id="amount" min="0.01" step="0.01" onChange={updateAmount}/>
            </div>
            <div className='new-expense__control'>
                <label>Expense Date</label><br />
                <input type="date" id="date" min="2019-01-01" max="2023-12-31" onChange={updateDate}/>
            </div>
            
        </div>
        <div className='new-expense__actions'>
               <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;