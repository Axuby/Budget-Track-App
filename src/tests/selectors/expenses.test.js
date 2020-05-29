import moment from 'moment'
import selectExpenses from '../../selectors/expenses'


 const expense = [{
     id:'1',
     description:'Gummy',
     note:'sss',
     amount:1009,
     createdAt:moment(0)
 },
 {
    id:'2',
    description:'Ofe akwu',
    note:'shut up',
    amount:20000,
    createdAt:moment(0).subtract(4, 'days').valueOf()
},
{
    id:'3',
    description:'Ofe Onugbu',
    note:'sweet',
    amount:3000,
    createdAt:moment(0).add(4, 'days').valueOf()
}]




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

test("should filter by start date",()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = selectExpenses(expense,filters)
    expect(result).toEqual([expense[2],expense[1]])
})


test("should filter by end date",()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(2,'days')
    }
    const result = selectExpenses(expense,filters)
    expect(result).toEqual([expense[1],expense[2]])
})


test("should sort by date",()=>{
    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment
    }
    const result = selectExpenses(expense,filters)
    expect(result).toEqual([expense[1],expense[2]])
})


test("should sort by date",()=>{
    const filters = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:moment
    }
    const result = selectExpenses(expense,filters)
    expect(result).toEqual([expense[1],expense[2],expense[0]])
})
