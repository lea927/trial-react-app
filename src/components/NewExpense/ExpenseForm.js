import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {

  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const titleChangeHandler = event => {
    setUserInput({
      ...userInput,
      title: event.target.value
    });
  };
  const amountChangeHandler = event => {
    setUserInput({
      ...userInput,
      amount: event.target.value
    });
  };
  const dateChangeHandler = event => {
    setUserInput({
      ...userInput,
      date: event.target.value
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    
    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date)
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
