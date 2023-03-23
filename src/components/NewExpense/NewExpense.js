import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  function saveExpenseDateHandler(expenseData) {
    const newExpenseData = {
      id: Math.random().toString(),
      ...expenseData,
    };
    props.onAddExpense(newExpenseData);
    setShowExpenseForm(false);
  }

  function cancelHandler() {
    setShowExpenseForm(false);
  }

  function addNewExpenseHandler() {
    setShowExpenseForm(true);
  }

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={saveExpenseDateHandler}
        />
      ) : (
        <button type="button" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
}
