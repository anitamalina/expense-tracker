import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter />
        {props.expenseData.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              price={expense.price}
              date={expense.date}
            />
          );
        })}
      </Card>
    </>
  );
}
