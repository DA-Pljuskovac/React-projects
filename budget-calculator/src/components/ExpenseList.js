import React from 'react'
import Item from './ExpenseItem'
import {MdDelete} from 'react-icons/md'
const ExpenseList = ({expenses}) => {
    return (
        <>
            <ul className='list'>
            {expenses.map((expense)=>{
                return <Item key={expense.id} expense={expense}></Item>
            })}
            </ul>
            {expenses.length >0 && 
            <button className='btn' >Clear
            <MdDelete className='btn-icon'></MdDelete>
            </button>}
            
        </>
    )
}

export default ExpenseList
