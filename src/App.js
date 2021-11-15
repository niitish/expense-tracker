import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const demoExpenses = [
    {
      id: "e1",
      title: "Notebook",
      amount: 50,
      date: new Date(2021, 10, 14),
    },
  ];

  const [expenses, setExpenses] = useState(demoExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onExpenseAdd={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
