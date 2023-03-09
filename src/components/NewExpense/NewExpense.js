import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  function saveExpenseDateHandler(expenseData) {
    const ExpenseData = {
      id: Math.random().toString(),
      ...expenseData,
    };
    props.onAddExpense(ExpenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
  );
}
