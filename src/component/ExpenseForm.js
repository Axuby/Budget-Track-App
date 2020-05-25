import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

// const now = moment();
// console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }

  };
  onFocusChange = ({ focused }) => {
  
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e)=>{
e.preventDefault()
if (!this.state.description || !this.state.amount) {
  this.setState(()=> ({error:"Please Input a description or amount"}))
}else{
this.setState(()=>({error:""}))
this.props.onSubmit({
  description:this.state.description,
  amount:parseFloat(this.state.amount)
})

}
  }
  render() {
    return (
      <div>
        <p>ExpenseForm</p>
        <div>
    {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Description"
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
            <input
              value={this.state.amount}
              type="text"
              placeholder="Amount"
              onChange={this.onAmountChange}
            />
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
            <textarea
              placeholder="add a note for your expense (optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
            ></textarea>
            <button>Add expense</button>
          </form>
        </div>
      </div>
    );
  }
}
