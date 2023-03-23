import ExpenseItem from "./ExpenseItem";
import Card from "./../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses(props) {
  const [year, setYear] = useState();
  function filterChangeHandler(selectedYear) {
    setYear(selectedYear);
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
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
