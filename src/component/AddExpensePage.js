import React from 'react'
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses'

const AddExpensePage = (props) => {
  console.log(props)
  return (
    <div className='add-expense'>
      <p>Add Expense</p>
      <ExpenseForm onSubmit={(expense)=>{
          props.dispatch(addExpense(expense))
          props.history.push('/')
        console.log(expense)
      }}/>
    </div>
  );
}
export default connect()(AddExpensePage);
