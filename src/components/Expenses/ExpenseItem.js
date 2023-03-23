import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";

export default function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__title">
          <h2>{props.title}</h2>
          <div className="expense-item__amount">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}
