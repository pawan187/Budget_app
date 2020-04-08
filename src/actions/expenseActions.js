import {v4 as uuidv4} from 'uuid';
import database from '../firebase/firebase'
// expense reducer
export const addExpense=(expense )=>({
    type : 'ADDEXPENSE',
    expense
});

export const startAddExpense = (expenseData = {})=>{
    return (dispatch)=>{
        database.ref('expense').push(expenseData)
        .then((ref)=>{
            dispatch(addExpense( { id : ref.key , ...expenseData }))
            // console.log("added to database")
        })
    }
};
export const removeExpense = (({id }={})=>({
    type : "REMOVEXPENSE",
    id: id
}))

export const startRemoveExpense = ({ id } = {})=>{
    return (dispatch)=>{
        database.ref(`expense/${ id }`).remove()
        .then((ref)=>{
            dispatch(removeExpense ( { id }))
        })
    }
}
export const editExpense = (({id , update} = {})=>({
    type : 'EDITEXPENSE',
    id,
    update
}))

export const startEditExpense = (({id , update} = {})=>{
    return (dispatch)=>{
        database.ref(`expense/${id}`).update({
            ...update
        }).then((ref)=>{
            dispatch(editExpense({id : id , update }))
        })
    }
})

export const setExpense = (expense)=>({
    type : "SETEXPENSE",
    expense
})

export const startSetExpense = (uid)=>{
    return (dispatch)=>{
       return database.ref('expense').once('value').then((snapshot)=>{
            let expense = [];
            snapshot.forEach((element)=>{
                if(element.val().uid===uid){
                    expense.push({id : element.key , ...element.val()})
                }
            })
            dispatch(setExpense(expense))
        })
    }
}

export const clearExpense =()=>({
    type:'CLEAREXPENSE'
})