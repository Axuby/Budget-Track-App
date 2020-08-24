import moment from 'moment'

export default (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters
  return expenses.filter(expense => {
      const createdAtMoment = moment(expense.createdAt)
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day'): true
        // typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'): true
        // typeof endDate !== "number" || expense.createdAt <= endDate
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }

    });
};
