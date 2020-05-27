import {addExpense,removeExpense,editExpense} from '../../actions/expenses'


test('Return an object',()=>{
    const action = removeExpense({id:"1234e"})
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:"1234e"
    })
})