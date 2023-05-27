import './ExpenseForm.css'

const ExpenseForm = () =>
{
    const addExpenses = () =>
    {
        const title = document.getElementById('title').value;
        const amount = document.getElementById('amount').value;
        const date = document.getElementById('date').value;
        console.log(title +" " + amount +" " + date) 
    }
    return (
    <div className='expense-form'>
        <form onChange={addExpenses}>
            <label>Expense Title</label><br />
            <input type="text" name="title" id="title" /><br />
            <label>Expense Amount</label><br />
            <input type="number" name="amount" id="amount" /><br />
            <label>Expense Date</label><br />
            <input type="date" name="date" id="date" /><br />
            <input type="submit" value="Change" />
        </form>
        </div>  
   
    )
};

export default ExpenseForm;