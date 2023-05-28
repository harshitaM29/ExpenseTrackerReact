import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    location:'Mumbai',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV',location:'Thane', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    location:'Delhi',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    location:'Pune',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const [list, setList] = useState(expenses);

const addExpenseHandler = expense => {
  const newList = list.concat(expense)

  setList(newList);
}
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={list} />
       
     
    </div>
  );
}

export default App;