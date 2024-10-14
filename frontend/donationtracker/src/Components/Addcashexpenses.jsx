import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../Styles/Registeradmin.css';

const Addcashexpenses = () => {
  const [formData, setFormData] = useState({
    ItemName: '',
    Quantity: '',
    Amount: '',
    ShopOwnerPhnNumber: '',
    CommitteName: '',
    SpentBy: '',
    TransactionMode: '',
    Receipt: null,
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
      Receipt: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!/^\d{10}$/.test(formData.ShopOwnerPhnNumber)) {
      toast.error('Mobile number should be a 10-digit number');
      return;
    }
    if (isNaN(formData.Quantity) || formData.Quantity <= 0) {
        toast.error('Quantity should be a positive number');
        return;
      }

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/expenses/cashexpenses', form);
      toast.success('Collection added successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to add collection');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Add Cash Collection</h2>

        <div className="form-group">
          <label>Item Name:</label>
          <input type="text" name="ItemName" value={formData.ItemName} onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" name="Quantity" value={formData.Quantity} onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label>Amount:</label>
          <input type="text" name="Amount" value={formData.Amount} onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label>Shop Owner Mobile No:</label>
          <input type="text" name="ShopOwnerPhnNumber" value={formData.ShopOwnerPhnNumber} onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label>Committee Name:</label>
          <input type="text" name="CommitteName" value={formData.CommitteName} onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label>Spent By:</label>
          <input type="text" name="SpentBy" value={formData.SpentBy} onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label>Transaction Mode:</label>
          <select name="TransactionMode" value={formData.TransactionMode} onChange={handleChange} required>
            <option value="">Select Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        <div className="form-group">
          <label>Receipt:</label>
          <input type="file" name="Receipt" onChange={handleFileChange} required/>
        </div>

        <button type="submit" className="submit-btn">Save</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Addcashexpenses;
