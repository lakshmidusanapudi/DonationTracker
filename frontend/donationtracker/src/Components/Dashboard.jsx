import React, { useState } from 'react';
import '../Styles/DashBoard.css'; 

import CashTable from './Cashtable'; 
import ItemsCollectionTable from './Itemstable'; 
import CashExpenseTable from './Cashexpenses'; 
import ItemsExpenseTable from './Itemexpenses'; 

function App() {
  
  const [selectedTable, setSelectedTable] = useState('cashCollection'); 
  const renderTable = () => {
    switch (selectedTable) {
      case 'cashCollection':
        return <CashTable />; 
      case 'itemsCollection':
        return <ItemsCollectionTable />; 
      case 'cashExpense':
        return <CashExpenseTable />; 
      case 'itemsExpense':
        return <ItemsExpenseTable />; 
      default:
        return null; 
    }
  };

  return (
    <div className="App">
      {/* NavBar */}
      <nav className="navbar">
        <div className="logo">Temple Logo</div>
        <ul className="nav-links">
          <li><a href='/AddCash'>Add Cash Collection</a></li>
          <li><a href="/AddItems">Add Item Collection</a></li>
          <li><a href="/AddCashExpense">Add Cash Expense</a></li>
          <li><a href="/AddItemExpense">Add Item Expense</a></li>
          <li><a href="/ComitteMember">Add Committee Member</a></li>
        </ul>
      </nav>

      {/* Card Section */}
      <div className="card-container">
        <div className="card" onClick={() => setSelectedTable('cashCollection')}>
          <h3>Total Cash Collection</h3>
          <p>₹50,000</p> 
        </div>
        <div className="card" onClick={() => setSelectedTable('itemsCollection')}>
          <h3>Total Items Collection</h3>
          <p>₹50,000</p> 
        </div>
        <div className="card" onClick={() => setSelectedTable('cashExpense')}>
          <h3>Total Cash Expense</h3>
          <p>₹10,000</p>
        </div>
        <div className="card" onClick={() => setSelectedTable('itemsExpense')}>
          <h3>Total Item Expense</h3>
          <p>₹5,000</p> 
        </div>
        <div className="card" onClick={() => setSelectedTable('')}>
          <h3>Total Balance</h3>
          <p>₹35,000</p> 
        </div>
      </div>

      <div className="table-container">
        {renderTable()}
      </div>
    </div>
  );
}

export default App;
