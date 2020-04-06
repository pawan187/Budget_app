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
            );
        case 'SETEXPENSE' :
            return ( action.expense )
         default : 
         return state
     }
}

export default expenseReducer;