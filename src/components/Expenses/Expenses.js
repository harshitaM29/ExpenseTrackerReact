import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const p = props.items;
    return(
    <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
     {p.map((key) => (
        <ExpenseItem key ={key.id} title={key.title} 
        //location={key.location} 
        amount={key.amount} 
        date={key.date} />
     ))}
         

</Card> 
    )
};

export default Expenses;