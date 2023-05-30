import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpenseList = (props) => {
    let data = props.items;
    if(data.length === 0) {
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }
    if(data.length === 1) {
        return (
            <ul className="expenses-list"> 
            {data.map((key) => (
                <ExpenseItem key ={key.id} title={key.title} 
                amount={key.amount} 
                date={key.date} />
    
            ))
            }
            <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
            </ul>
        )
    }
       
    return ( 
        <ul className="expenses-list"> 
        {data.map((key) => (
            <ExpenseItem key ={key.id} title={key.title} 
            //location={key.location} 
            amount={key.amount} 
            date={key.date} />

        ))
        }
        </ul>
       )
}


export default ExpenseList;