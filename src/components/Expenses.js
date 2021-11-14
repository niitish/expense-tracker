import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
import { useState } from "react";

const Expenses = (props) => {
  const [month, setMonth] = useState("Nov");

  const filterChangeHandler = (selectedMonth) => {
    console.log(selectedMonth);
    setMonth(selectedMonth);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={month} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
