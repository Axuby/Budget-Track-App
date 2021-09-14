import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters';

const ExpensifyDashboardPage = () => (
  <div className='expenseDashboard'>
    <ExpenseList/>
    <ExpenseListFilters/>
  </div>
);
export default ExpensifyDashboardPage;
