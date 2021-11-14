import "./Expenses.css";
import ExpenseList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
import { useState } from "react";

const Expenses = (props) => {
  const [month, setMonth] = useState("November");

  const filterChangeHandler = (selectedMonth) => {
    setMonth(selectedMonth);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return (
      Intl.DateTimeFormat("en-US", { month: "long" }).format(expense.date) ===
      month
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={month} onChangeFilter={filterChangeHandler} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
