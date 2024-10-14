import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registeradmin from '../src/Components/Registeradmin'; 



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Registeradmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

