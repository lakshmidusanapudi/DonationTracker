import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registeradmin from '../src/Components/Registeradmin'; 
import Homepage from "./Components/Homepage";
import Addcommittemember from "./Components/Addcommittemenber";
import AddCash from "./Components/AddCash";
import AddItems from "./Components/AddItems";
import AddCashExpenses from "./Components/Addcashexpenses";
import Additemexpenses from "./Components/Additemexpenses";



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
        </Routes>
      </Router>
    </div>
  );
}

export default App;

