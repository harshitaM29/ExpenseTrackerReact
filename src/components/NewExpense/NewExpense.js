import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';


const NewExpense = (props) =>{
    const [isShown, setIsShown] = useState(false);
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()

        };
        props.onAddExpense(expenseData);
    };

    const handleClick = event  => {
        setIsShown(true);
    }
    return (
        <div className="new-expense">
            <button onClick={handleClick}>Add New Expense</button>
            {isShown && <ExpenseForm onSaveExpenseData={saveExpenseHandler} />}
        </div>
    )
}

export default NewExpense;