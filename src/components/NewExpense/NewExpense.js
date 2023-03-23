import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  function saveExpenseDateHandler(expenseData) {
    const newExpenseData = {
      id: Math.random().toString(),
      ...expenseData,
    };
    props.onAddExpense(newExpenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
}
