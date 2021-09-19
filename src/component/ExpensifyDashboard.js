import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters';
import '../styles/components/_expenseDashboard.scss'



const ExpensifyDashboardPage = () => (
  <div className='expenseDashboard'>
    <ExpenseList/>
    <ExpenseListFilters/>
  </div>
);
export default ExpensifyDashboardPage;
