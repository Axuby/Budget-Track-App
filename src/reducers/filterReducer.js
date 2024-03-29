import  moment from 'moment'

const filterReducerDefault = {
  text: "",
  sortBy: "amount",
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filterReducerDefault, action) => {

  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: action.date
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: action.amount
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
