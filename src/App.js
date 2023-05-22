import ExpenseItem from "./components/ExpenseItem";


function App() {
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
  return (
    <div>
      <h2>Let's get started!</h2>
      { expenses.map((ex) =>(
        <ExpenseItem title={ex.title} location={ex.location} amount={ex.amount} date={ex.date}></ExpenseItem>
        
))}  
      
     
    </div>
  );
}

export default App;