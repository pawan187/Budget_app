import {createStore , combineReducers} from 'redux';
import {v4 as uuidv4} from 'uuid';
// expense reducer
const addExpense=({
    description = '' , 
    amount = 0 , 
    createdAt = 0 , 
    note = ''}={}   )=>({
    type : 'ADDEXPENSE',
    expense : {
        id : uuidv4(),
        description : description,
        note : note,
        amount : amount,
        createdAt: createdAt

    }
});
const removeExpense = (({id }={})=>({
    type : "REMOVEXPENSE",
    id: id
}))
const editExpense = (({id , update} = {})=>({
    type : 'EDITEXPENSE',
    id,
    update
}))
const expenseReducerDefault = []
const expenseReducer = (state = expenseReducerDefault ,action)=>{
     switch(action.type){
        case "ADDEXPENSE":
            return [...state , action.expense];
        case "REMOVEXPENSE":
            return ( 
                state.filter(({id})=>( id !== action.id)
                )
            );
        case "EDITEXPENSE":
            return (
                state.map((element)=>{
                        if(element.id === action.id){
                            return { ...element , ...action.update}
                        }else{
                            return element
                        }
                })
            )
         default : 
         return state
     }
}


// filter reducers
const filterReducerDefault = {
    text : '' ,
    sortBy : 'amount',
    startDate : undefined,
    endDate : undefined
}
const setTextFilter = ((text='')=>({
    type : "SETTEXT",
    text
}))
const sortByAmount = ()=>({
    type : 'SORTBYAMOUNT'
})
const sortByDate = ()=>({
    type : 'SORTBYDATE'
})
const setStartDate = (date)=>({
    type : "SETSTARTDATE",
    date
})
const setEndDate = (date)=>({
    type : 'SETENDDATE',
    date
})
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
const getvisibleExpeneses = (expense,{text , sortBy ,startDate ,endDate})=>{
    return expense.filter((expense)=>{
        const filterbyStartDate = typeof startDate !== 'number' || expense.createdAt >=startDate;
        const filterbyEndDate = typeof endDate !== 'number' || expense.createdAt <= endDate ;
        const filterbyText  = expense.description.toLowerCase().includes(text.toLowerCase()) ;
        return filterbyStartDate && filterbyEndDate && filterbyText
    }).sort((a,b)=>{
        if(sortBy ==='date' ){
            return a.createdAt < b.createdAt ? 1 : -1 ;
        }
        else{
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

const store = createStore(combineReducers({
    expense : expenseReducer , filter : filterReducer
    }));
store.subscribe(()=>{ 
    const state = store.getState()
    const visibleExpense = getvisibleExpeneses(state.expense,state.filter)
    console.log(visibleExpense)
    });
const expenseOne = store.dispatch(addExpense({
    description : "italy" , 
    note : 'spent for breakfast' , 
    amount : 80,
    createdAt : 500
}))
const expenseTwo  = store.dispatch(addExpense({
    description : "traveling" , 
    note : 'traveled to college' , 
    amount : 70,
    createdAt : 1000
}))
// // console.log(expenseOne.expense.id)
// store.dispatch(removeExpense({id : expenseOne.expense.id}))
// store.dispatch(editExpense({id : expenseTwo.expense.id ,update : { amount : 40 } }))

// store.dispatch(setTextFilter('vel'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(600))
// store.dispatch(setEndDate(1000))


const demoState = {
    expense : [
        {
            id :"sdfadf",
            description : 'rent',
            note : "it is a rent",
            amount : 45100,
            createdAt: 0
        }
    ],
    filters : 
        {
            text : 'rent' ,
            sortBy : 'amount',
            startDate : undefined,
            endDate : undefined
        }
}
