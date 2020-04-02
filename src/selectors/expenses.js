import moment from 'moment'
export default (expense, {text , sortBy ,startDate ,endDate})=>{
    return expense.filter((expense)=>{
        const expenseMoment = moment(expense.createdAt)
        const filterbyStartDate = startDate ? startDate.isSameOrBefore(expenseMoment, 'day') : true;
        const filterbyEndDate = endDate ? endDate.isSameOrAfter(expenseMoment , 'day') :true ;
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
