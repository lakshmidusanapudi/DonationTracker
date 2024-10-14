import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../Styles/Registeradmin.css';

const Additemexpenses = () => {
  const [formData, setFormData] = useState({
    ItemName: '',
    Quantity: '',
    Purpose: '',
    SpentBy: '',
    CommitteName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Quantity validation (if required, make sure it's a number and positive)
    if (isNaN(formData.Quantity) || formData.Quantity <= 0) {
      toast.error('Quantity should be a positive number');
      return;
    }

    try {
      await axios.post('http://localhost:5000/expense/itemexpenses', formData);
      toast.success('Expense added successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to add expense');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Add Expense</h2>

        <div className="form-group">
          <label>Item Name:</label>
          <input
            type="text"
            name="ItemName"
            value={formData.ItemName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            name="Quantity"
            value={formData.Quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Purpose:</label>
          <input
            type="text"
            name="Purpose"
            value={formData.Purpose}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Spent By:</label>
          <input
            type="text"
            name="SpentBy"
            value={formData.SpentBy}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Committee Name:</label>
          <input
            type="text"
            name="CommitteName"
            value={formData.CommitteName}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Save</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Additemexpenses;
