export const setTextFilter = ((text='')=>({
    type : "SETTEXT",
    text
}))
export const sortByAmount = ()=>({
    type : 'SORTBYAMOUNT'
})
export const sortByDate = ()=>({
    type : 'SORTBYDATE'
})
export const setStartDate = (date)=>({
    type : "SETSTARTDATE",
    date
})
export const setEndDate = (date)=>({
    type : 'SETENDDATE',
    date
})
