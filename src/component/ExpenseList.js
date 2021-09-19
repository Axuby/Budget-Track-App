import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expensesSelector';

const ExpenseList = props => {
  return (
    <div className="ExpenseList">
      <h2 title> Expenses List</h2>
      {props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id}   {...expense} />;
      })}
    </div>
  );     
}

const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses,state.filters)
  })

export default connect(mapStateToProps)(ExpenseList)
