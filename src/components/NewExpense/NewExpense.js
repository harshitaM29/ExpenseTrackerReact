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

    const openForm = ()  => {
        setIsShown(true);
    }

    const closeForm = () => {
        setIsShown(false);
    }
    return (
        <div className="new-expense">
            {!isShown && <button onClick={openForm}>Add New Expense</button>}
             {isShown && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={closeForm}/>}
   
        </div>
    )
}

export default NewExpense;