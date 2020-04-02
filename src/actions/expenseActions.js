import {v4 as uuidv4} from 'uuid';
// expense reducer
export const addExpense=({
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
export const removeExpense = (({id }={})=>({
    type : "REMOVEXPENSE",
    id: id
}))
export const editExpense = (({id , update} = {})=>({
    type : 'EDITEXPENSE',
    id,
    update
}))
