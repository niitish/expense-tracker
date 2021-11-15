import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmt, setEnteredAmt] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmt,
      date: new Date(enteredDate),
    };

    props.onSave(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmt("");
  };

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const amtHandler = (event) => {
    setEnteredAmt(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="5"
            step="5"
            value={enteredAmt}
            onChange={amtHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-11-01"
            value={enteredDate}
            onChange={dateHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
