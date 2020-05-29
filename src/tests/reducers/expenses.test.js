import expenseReducer from '../../reducers/expenseReducer'


test('should set default expense reducer', () => {
    
    const state = expenseReducer(undefined,{type:'@@INIT'})
    expect(state).toBe([])
})



