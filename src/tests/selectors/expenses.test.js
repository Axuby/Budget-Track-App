import moment from 'moment'
import selectExpenses from '../../selectors/expenses'


 const expense = [{
     id:'1',
     description:'Gummy',
     note:'sss',
     amount:1009,
     createdAt:78
 },
 {
    id:'2',
    description:'Ofe akwu',
    note:'shut up',
    amount:20000,
    createdAt:9
},
{
    id:'3',
    description:'Ofe Onugbu',
    note:'sweet',
    amount:3000,
    createdAt:10
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
        startDate:moment(0)
    }
    const result = selectExpenses(expense,filters)
    expect(result).toEqual([expense[2],expense[1]])
})