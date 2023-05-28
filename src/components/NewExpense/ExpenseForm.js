import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () =>
{
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const[enteredAmount, setEnteredAmount] = useState('');
    // const[enteredDate, setEnteredDate] = useState('');

    const [userInput,setUserInput] = useState({
        enteredtitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const updateTitle = (e) =>{

        // setUserInput({ 
        //     ...userInput,
        //    enteredtitle: e.target.value,
           
        // })
        setUserInput((prevState) => {
            return {...prevState, enteredtitle:e.target.value};
        })
    }

    const updateAmount = (e) =>{
        // setUserInput({ 
        //     ...userInput,
        //    enteredAmount: e.target.value,
           
        // })
        setUserInput((prevState) => {
            return {...prevState, enteredAmount:e.target.value};
        })
    }
    const addExpense = (e) => {
        e.preventDefault();
        const expenseDetails = {
            title: userInput.enteredtitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        let day = expenseDetails.date.getDate();
        let month = expenseDetails.date.getMonth();
        let year = expenseDetails.date.getFullYear();
        const form = month + "/" + day + "/" + year;
       
        let list = document.getElementById('myList');
        let li = document.createElement('li');
        li.textContent = "Title=" +expenseDetails.title + " Amount=" +expenseDetails.amount+ " Date="+ form;
        list.append(li);
        console.log(expenseDetails);

    }

    const updateDate = (e) =>{
        // setUserInput({ 
        //     ...userInput,
        //    enteredDate: e.target.value,
           
        // })
        setUserInput((prevState) => {
            return {...prevState, enteredDate:e.target.value};
        })
    }
    return (
        <div>
         <form onSubmit={addExpense}>
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
     
        <ul id="myList"></ul>
        </div>
    )
};

export default ExpenseForm;