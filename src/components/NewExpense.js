import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const expenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
    };
    props.onExpenseAdd(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSave={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
