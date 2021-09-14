// import {addExpense,removeExpense,editExpense} from '../../actions/expenses'


// test('Return an object',()=>{
//     const action = removeExpense({id:"1234e"})
//     expect(action).toEqual({
//         type:"REMOVE_EXPENSE",
//         id:"1234e"
//     })
// })

// test('Return an object',()=>{
//     const action = editExpense('1234e',{
//         note:'qqqq',
//         amount:23
//     })
//     expect(action).toEqual({
//         note:'qqqq',
//         amount:23
//     })
// })



// test('Return an object for add expense',()=>{
//     const expenseData = {
//         description:'my rent',
//         note:'yee it is!',
//         amount:345,
//         createdAt:1000
//     }

//     const action = addExpense(expenseData)
//     expect(action).toEqual({
//         type:"ADD_EXPENSE",
//         expense:{
//             ...expenseData,
//             id:expect.any(String)
//         }
//     })
// })



// test('Return an object for add expense',()=>
//     const action = addExpense()
//     expect(action).toEqual({
//         type:"ADD_EXPENSE",
//         expense:{
//             description = "",
//             notes = "",
//             amount = 0,
//             createdAt = 0,
//             id:expect.any(String)
//         }
//     })
// })
