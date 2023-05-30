


import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} location={props.location} amount={props.amount}   />
            {/* <button onClick={clickHandler}>Change Amount</button> */}
    </Card>
    </li>
    );
}

export default ExpenseItem;