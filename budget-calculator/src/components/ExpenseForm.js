import React from 'react'
import {MdSend} from 'react-icons/md'
export const ExpenseForm = ({charge,amount,handleCharge,handleAmount,handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor='charge'> charge</label>
                    <input 
                    type="text" 
                    className='form-control' 
                    id='charge'
                    name='charge'
                    value={charge}
                    onChange={handleCharge}
                    placeholder='e.g. rent'/>
                </div>
                <div className="form-group">
                    <label htmlFor='amount'> charge</label>
                    <input 
                    type="number" 
                    className='form-control' 
                    id='amount'
                    name='amount'
                    value={amount}
                    onChange={handleAmount}
                    placeholder='e.g. 100'/>
                </div>
            </div>
            <button type='submit' className='btn'>
                submit 
                <MdSend className='btn-icon'></MdSend>
            </button>
        </form>
    )
}
export default ExpenseForm