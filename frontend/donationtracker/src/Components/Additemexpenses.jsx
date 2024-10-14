import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../Styles/Registeradmin.css';

const Additemexpenses = () => {
  const [formData, setFormData] = useState({
    ItemName:'',
    Purpose:'',
    Quantity: '',
    CommitteName: '',
    SpentBy: '',
  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      Receipt: e.target.files[0] 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/expenses/itemexpenses', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Expenses addede sucessfully!');
    } catch (error) {
      console.error(error);
      toast.error('Expenses adding failed');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Add Cash Expenses</h2>
        <div className="form-group">
          <label>Item Name:</label>
          <input type="text" name="ItemName" value={formData.ItemName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Purpose:</label>
          <input type="number" name="Quantity" value={formData.Purpose} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" name="Quantity" value={formData.Quantity} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Committee Name:</label>
          <input type="text" name="CommitteName" value={formData.CommitteName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Spent By:</label>
          <input type="text" name="SpentBy" value={formData.SpentBy} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">AddExpenses</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Additemexpenses;
