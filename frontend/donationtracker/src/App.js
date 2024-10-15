import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registeradmin from '../src/Components/Registeradmin'; 
import Homepage from "./Components/Homepage";
import Addcommittemember from "./Components/Addcommittemenber";
import AddCash from "./Components/AddCash";
import AddItems from "./Components/AddItems";
import AddCashExpenses from "./Components/Addcashexpenses";
import Additemexpenses from "./Components/Additemexpenses";
import CashCollectionTable from "./Components/Cashtable";
import CashExpensesCollectionTable from "./Components/Cashexpenses";
import Login from "./Components/Login";
import DashBoard from "./Components/Dashboard"
import ItemsCollection from './Components/Itemstable'
import ItemsExpenses from './Components/Itemexpenses'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/RegisterAdmin' element={<Registeradmin />} />
          <Route path='/ComitteMember' element={<Addcommittemember/>} />
          <Route path='/AddCash' element={<AddCash/>}/>
          <Route path='/AddItems' element={<AddItems/>}/>
          <Route path='/AddCashExpense' element={<AddCashExpenses/>}/>
          <Route path='/AddItemExpense' element={<Additemexpenses/>}/>
          <Route path='/Cashtable' element={<CashCollectionTable/>}/>
          <Route path='/Cashetable' element={<CashExpensesCollectionTable/>}/>
          <Route path='/ComitteeMemberLogin' element={<Login/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/ItemsCollection' element={<ItemsCollection/>}/>
          <Route path='/ItemsExpenses' element={<ItemsExpenses/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

