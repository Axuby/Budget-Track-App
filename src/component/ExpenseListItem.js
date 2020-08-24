import React from "react";
import { Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";
import moment from "moment";
import numeral from "numeral";
import { connect } from "react-redux";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      { numeral(amount/100).format('#0,0.00')} - {moment(createdAt).format('MMM Do, YYYY')}
    </p>

    <button onClick={removeExpense(id)}>Remove</button>
    
  </div>
);

const mapDispatchToProps = dispatch =>({
  removeExpense:id => dispatch(removeExpense(id))
})

export default connect(mapDispatchToProps)(ExpenseListItem)

