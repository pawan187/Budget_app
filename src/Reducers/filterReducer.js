import moment from 'moment'
// filter reducers
const filterReducerDefault = {
    text : '' ,
    sortBy : 'amount',
    startDate : moment().startOf('year'),
    endDate : moment().endOf('month')
}
const filterReducer =(state=filterReducerDefault,action)=>{
    switch(action.type){
        case 'SETTEXT' : 
            return { ...state , text :action.text }
        case 'SORTBYAMOUNT' : 
            return {...state , sortBy : 'amount'}
        case "SORTBYDATE" : 
            return {...state , sortBy : 'date'} 
        case "SETSTARTDATE":
            return { ...state , startDate : action.date}
        case 'SETENDDATE' : 
            return {...state , endDate : action.date}
        default : 
        return state
    }
}

export default filterReducer ;