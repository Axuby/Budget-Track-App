import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expensesSelector';

const ExpenseList = props => {
  console.log(props)
  console.log(props.filters.sortBy)
  return (

    <div>
      <h2>ExpenseList</h2>
      {props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
      {props.filters.sortBy}
    </div>
  );
}

const mapStateToProps = state => {

  return {
    expenses: selectExpenses(state.expenses,state.filters),
    filters: state.filters
  };
};
console.log(mapStateToProps)

export default connect(mapStateToProps)(ExpenseList);
