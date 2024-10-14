import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registeradmin from '../src/Components/Registeradmin'; 
import Homepage from "./Components/Homepage";
import Addcommittemember from "./Components/Addcommittemenber";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/RegisterAdmin' element={<Registeradmin />} />
          <Route path='/ComitteMember' element={<Addcommittemember/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

