import React, { Component } from 'react'
import { connect } from "react-redux";
import { DateRangePicker} from 'react-dates'
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters'
import  "../styles/components/__expenseFilters.scss";


 class ExpenseListFilters extends Component {
        state = {
          calenderFocused:null
        }


      onDatesChange = ({startDate,endDate})=>{
        console.log(this.props.match)
              this.props.dispatch(setStartDate(startDate))
              this.props.dispatch(setEndDate(endDate))
      }
      onFocusChange = (calenderFocused)=>{
            this.setState(()=> ({
              calenderFocused
            }))
      }

  render() {
    return (
              <div class='expenseFilters'>
                    <input
                      type="text"
                      value={this.props.filters.text}
                      onChange={e => {
                        console.log(e.target.value);
                        this.props.dispatch(setTextFilter(e.target.value))
                      }}
                    />
                    <select 
                    value={this.props.filters.sortBy} 
                    onChange={e => {
                      console.log(e)
                      if(e.target.value === 'date'){
                        this.props.dispatch(sortByDate(e.target.value))
                      }else if(e.target.value === 'amount'){
                this.props.dispatch(sortByAmount(e.target.value))
                      }
                    }}
                    >
                  <option value='date'>Date</option>
                  <option value='amount'>Amount</option>
                    </select>

                <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                startDateId="start"
                endDateId="end"
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                isOutsideRange={()=> false}
                numberOfMonths={1}
                />
          </div>
    )
  }
}
;
const mapStateToProps = state => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
