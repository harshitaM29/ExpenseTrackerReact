import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {
    const p = props.items;
    return(
    <Card className='expenses'>
     {p.map((key) => (
        <ExpenseItem key ={key.id} title={key.title} location={key.location} amount={key.amount} date={key.date} />
     ))}
         

</Card> 
    )
};

export default Expenses;