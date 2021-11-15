import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const expenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
    };

    props.onExpenseAdd(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSave={expenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
