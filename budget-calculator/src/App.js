import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
const { v4: uuid } = require('uuid');
const initialExpenses = [
  { id: uuid(), 
    charge: "rent", 
    amount: 1600 },
  { id: uuid(), 
    charge: "car payment", 
    amount: 400 },
  {
    id: uuid(),
    charge: "credit card bill ",
    amount: 1200
  }
];


function App() {
  //state values
  //all expense, add expense
  const [expenses,setExpenses]=useState(initialExpenses);
  //single expense
  const [charge,setCharge]=useState('');
  //single amount
  const [amount,setAmount]=useState('');
  //alert
  const [alert,setAlert]=useState({show:false});
  //functionality
  
  const handleCharge=e=>{
    setCharge(e.target.value)
  }
  const handleAmount=e =>{
    setAmount(e.target.value)
  }
  const handleSubmit=e =>{
    e.preventDefault();
    if(charge !== '' && amount >0){
      const singleExpense={id:uuid(),charge,amount};
      setExpenses([...expenses,singleExpense]);
      setCharge('');
      setAmount('');
    }else{
      //alert
    }
  }
  return (
    <>
    <Alert></Alert>
    <h1>budget calculator</h1>
    <main className='App'>
    <ExpenseForm charge={charge} amount={amount} 
    handleAmount={handleAmount}
    handleCharge={handleCharge}
    handleSubmit={handleSubmit}></ExpenseForm>
    <ExpenseList expenses={expenses}></ExpenseList>
    </main>
    <h1>
    total spending : <span className='total'>$ {expenses.reduce((acc,curr)=>{
      return acc +=parseInt(curr.amount);
    },0)}
    </span>
    </h1>
    </>
  );
}

export default App;
