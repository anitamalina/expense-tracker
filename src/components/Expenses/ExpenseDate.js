import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  console.log("expenseDate", props.date);
  const month = props.date
    ? props.date.toLocaleString("en-US", { month: "long" })
    : null;
  const day = props.date
    ? props.date.toLocaleString("en-US", { day: "2-digit" })
    : null;
  const year = props.date ? props.date.getFullYear() : null;
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
