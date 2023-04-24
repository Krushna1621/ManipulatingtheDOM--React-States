import logo from './logo.svg';
import React from 'react';
import Card from './components/Card';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  // define an array of expenses
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return React.createElement(
    Card,
    {},
    React.createElement('h2', {}, 'krushnkant shinde'),
    expenses.map(expense =>
      React.createElement(ExpenseItem, {
        
        id:expense.id,
        title:expense.title,
        amount:expense.amount,
        date:expense.date
    
      })
    )
  );
}

// export the App component as the default export
export default App;
