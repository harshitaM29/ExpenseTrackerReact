import './ExpenseForm.css'

const ExpenseForm = () =>
{
    const addExpenses = (event) =>
    {
        console.log(event.target.value)
    }
    return (
         <form onChange={addExpenses}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Expense Title</label><br />
                <input type="text" id="title" />
            </div>
            <div className='new-expense__control'>
                <label>Expense Amount</label><br />
                <input type="number" id="amount" min="0.01" step="0.01" />
            </div>
            <div className='new-expense__control'>
                <label>Expense Date</label><br />
                <input type="date" id="date" min="2019-01-01" max="2023-12-31" />
            </div>
            
        </div>
        <div className='new-expense__actions'>
               <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;