import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const clickHandler = (e) => {
        var display = document.getElementsByClassName('expense-item');
        var len = display.length;
        for (var i = 0; i < len; i++) {
           display[0].remove();
        }
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} location={props.location} amount={props.amount}   />
            <button onClick={clickHandler}>Delete</button>
    </Card>
    );
}

export default ExpenseItem;