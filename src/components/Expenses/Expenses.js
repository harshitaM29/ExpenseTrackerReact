import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {
    const p = props.items;
    p.map(key => console.log(key.title)); 
    return(
    <Card className='expenses'>
     {p.map((key) => (
        <ExpenseItem title={key.title} location={key.location} amount={key.amount} date={key.date} />
     ))}
        {/* <ExpenseItem title={props.items[0].title} location={props.items[0].location} amount={props.items[0].amount} date={props.items[0].date} />
        <ExpenseItem title={props.items[1].title} location={props.items[1].location} amount={props.items[1].amount} date={props.items[1].date} />
       <ExpenseItem title={props.items[2].title} location={props.items[2].location} amount={props.items[2].amount} date={props.items[2].date} />
        <ExpenseItem title={props.items[3].title} location={props.items[3].location} amount={props.items[3].amount} date={props.items[3].date} /> */}
         

</Card> 
    )
};

export default Expenses;