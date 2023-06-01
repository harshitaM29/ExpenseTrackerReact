import { useState } from "react";

import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";


const Expenses = (props) => {
    const p = props.items;
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);

    }
    // console.log(+filteredYear);
    const filteredExpenses = p.filter(expense => {
        return expense.date.getFullYear() === +filteredYear;
    })

    return(
    <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
         

</Card> 
    )
};

export default Expenses;