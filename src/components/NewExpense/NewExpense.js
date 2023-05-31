import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';
import AddButton from './AddButton';

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
            <AddButton onClick={handleClick}>Add New Expense</AddButton>
            {isShown && <ExpenseForm onSaveExpenseData={saveExpenseHandler} />}
        </div>
    )
}

export default NewExpense;