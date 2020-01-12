import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expensesSelector';

const ExpenseList = props => (
  <div>
    <h2>ExpenseList</h2>
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
    {props.filters.sortBy}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses,state.filters),
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
