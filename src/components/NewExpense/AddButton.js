import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const AddButton = props => {
    
    const openForm = event  => {
        setIsShown(true);
    }
    return (
    <div className="new-expense">
    <button onClick={openForm}>Add New Expense</button>
</div>
    )
};

export default AddButton;