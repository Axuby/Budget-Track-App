import uuid from "uuid";

export const addExpense = ({
  description = "",
  notes = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expenses: {
    id: uuid(),
    description,
    notes,
    amount,
    createdAt
  }
});

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});



