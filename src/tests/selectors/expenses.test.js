import moment from 'moment'
import selectExpenses from '../../selectors/expensesSelector'
import expense from '../fixtures/expense'




test('Should filter by text value',()=>{
    const filters = {
        text:'e', 
        sortBy:'date',
        startDate:undefined,
        endDate: undefined
        }
    const result = selectExpenses(expense,filters)
    expect(result).toEqual([expense[2],expense[1]])
})

// test("should filter by start date",()=>{
//     const filters = {
//         text:'',
//         sortBy:'date',
//         startDate:moment(0),
//         endDate:undefined
//     }
//     const result = selectExpenses(expense,filters)
//     expect(result).toEqual([expense[2],expense[1]])
// })


// test("should filter by end date",()=>{
//     const filters = {
//         text:'',
//         sortBy:'date',
//         startDate:undefined,
//         endDate:moment(0).add(2,'days')
//     }
//     const result = selectExpenses(expense,filters)
//     expect(result).toEqual([expense[1],expense[2]])
// })


// test("should sort by date",()=>{
//     const filters = {
//         text:'',
//         sortBy:'date',
//         startDate:undefined,
//         endDate:moment
//     }
//     const result = selectExpenses(expense,filters)
//     expect(result).toEqual([expense[1],expense[2]])
// })


// test("should sort by date",()=>{
//     const filters = {
//         text:'',
//         sortBy:'amount',
//         startDate:undefined,
//         endDate:moment
//     }
//     const result = selectExpenses(expense,filters)
//     expect(result).toEqual([expense[1],expense[2],expense[0]])
// })
