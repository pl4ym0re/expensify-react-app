import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses'
import {removeExpense} from '../actions/expenses'


const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense)=>{
          props.dispatch(editExpense(props.expense.id,expense));
          props.history.push 
        }}
      />
      <button onClick={()=>{
        props.dispatch(removeExpense(props.expense));
        // Same as
        // props.dispatch(removeExpense({id: props.expense.id}));
        // Because removeExpense({id});
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      if (expense.id === props.match.params.id) {
        return true;
      }
    })
  };
};


export default connect(mapStateToProps)(EditExpensePage);
