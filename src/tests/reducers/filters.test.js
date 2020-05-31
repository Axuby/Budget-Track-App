// import filterReducer from '../../reducers/filterReducer'
// import moment from 'moment'


// test('Should  setup default filter values,,return state array  and action types', () =>{
//     const state = filterReducer(undefined,{type :'@@INIT'})
//     expect(state).toBe({
//         text:'',
//         sortBy:'date',
//         startDate:moment().startOf('month'),
//         endDate:moment().endOf('month')

//     })
// })

// test('should set sortBy  to amount ',()=>{
//     const state = filterReducer(undefined,{type:'SORT_BY_AMOUNT'})
//     expect(state.sortBy).toBe('amount')
// })

// test('should set sortBy  to date ',()=>{
// const currentState = {
//     text:'name',
//     sortBy:'date',
//     startDate:moment().startOf('month'),
//     endDate:moment().endOf('month')
// }
// const action = { type: 'SORT_BY_DATE'}
//     const state = filterReducer(currentState,action)
//     expect(state.sortBy).toBe('date')
// })

// test('Should set text filter',()=>{
//     const currentState = {
//         text:'name',
//         sortBy:'date',
//         startDate:moment().startOf('month'),
//         endDate:moment().endOf('month')
//     }
//     const state = filterReducer(currentState,{type:"SET_TEXT_FILTER"})
//     expect(state.text).toBe('name')
// })


// test('Should set text filter',()=>{
// const  text = 'This is a text'
// const action = {
//     type:'SET_TEXT_FILTER',
//     text
// }
//     const state = filterReducer(undefined,action)
//     expect(state.text).toBe(text)
// })

// test('Should set start date  filter',()=>{
// const startDate = moment()

// const action = {
//     type:'SET_START_DATE',
//     startDate
// }
//     const state = filterReducer(undefined,action)
//     expect(state.startDate).toEqual(startDate)
// })


// test('Should set end date  filter',()=>{
//     const endDate = moment()
    
//     const action = {
//         type:'SET_START_DATE',
//         endDate
//     }
//         const state = filterReducer(undefined,action)
//         expect(state.endDate).toEqual(endDate)
//     })