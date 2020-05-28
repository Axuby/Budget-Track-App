const expenseReducerDefault = [];//default state value

export default (state = expenseReducerDefault, action) => {
  console.log(state)
  
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expenses];
    case "REMOVE_EXPENSE":
      return state.filter(({ expenseId }) => action.id !== expenseId);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
