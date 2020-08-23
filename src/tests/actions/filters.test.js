// import moment from 'moment'
// import {
//     setTextFilter,
//     setStartDate,
//     setEndDate,
//      sortByAmount,
//      sortByDate
//     } from '../../actions/filters'

// test('Should generate set start date action object', ()=>{
//     const action = setStartDate()
//     expect(action).toEqual({
//         type:'SET_START_DATE'
//     })
// })

// test('Should generate set end date action object', ()=>{
//     const action = setEndDate()
//     expect(action).toEqual({
//         type:'SET_END_DATE'
//     })
// })


// test('Should generate set text filter action object', ()=>{
//     const text = 'egg'
//     expect(setTextFilter(text)).toEqual({
//         type: "SORT_BY_AMOUNT",
//         text
//     })
// })

// test('Should generate sort by amount action object', ()=>{
//     const action = sortByAmount()
//     expect(action).toEqual({
//         type: "SORT_BY_AMOUNT",
//         sortBy: expect.any(String)
//     })
// })

// test('Should generate sort by date action object', ()=>{
//     const action = sortByDate(moment())
//     expect(action).toEqual({
//         type: "SORT_BY_DATE",
//         sortBy: moment()
//     })
// })




// test('Should generate set start date action object', ()=>{
//     const action = setStartDate(moment(0))
//     expect(action).toEqual({
//         type:'SET_START_DATE',
//         startDate:moment(o)
//     })
// })