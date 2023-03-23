import Card from "./../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [year, setYear] = useState("All");

  function filterChangeHandler(selectedYear) {
    setYear(selectedYear);
  }

  const filteredExpenses = props.expenseData.filter((expense) => {
    return year === "All" || expense.date.getFullYear().toString() === year;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenseItems={filteredExpenses} />
      </Card>
    </>
  );
}
