import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../Styles/Registeradmin.css';

const AddItems = () => {
  const [formData, setFormData] = useState({
    Devotte:'',
    PhnNumber:'',
    Email:'',
    ItemName:'',
    Quantity:'',
    CommitteName:'',
    CollectedBy:'',
    CollectedDate:''
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
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/collection/item', form);
      toast.success('item added  successfully!');
    } catch (error) {
      console.error(error);
      toast.error('failed to add item');
    }
  };

  
//   if (!/^\d{10}$/.test(formData.ShopOwnerPhnNumber)) {
//     toast.error('Mobile number should be a 10-digit number');
//     return;
//   }
//   if (isNaN(formData.Quantity) || formData.Quantity <= 0) {
//       toast.error('Quantity should be a positive number');
//       return;
//     }
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(formData.Email)) {
//       toast.error('Invalid email format');
//       return;
//     }

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Add item Collection</h2>
      <div className="form-group">
        <label>Devotee Name:</label>
        <input type="text" name="Devotte" value={formData.Devotte} onChange={handleChange}required/>
      </div>
      <div className="form-group">
        <label>Mobile No:</label>
        <input type="text" name="PhnNumber" value={formData.PhnNumber} onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="Email" value={formData.Email} onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <label>Item Name:</label>
        <input type="text" name="ItemName" value={formData.ItemName} onChange={handleChange} required/> 
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input type="number" name="Quantity" value={formData.Quantity} onChange={handleChange} required/> 
      </div>
      <div className="form-group">
        <label>Collected By:</label>
        <input type="text" name="CollectedBy" value={formData.CollectedBy} onChange={handleChange} required/>
      </div>
      <div className="form-group">
        <label>Collected Date:</label>
        <input type="date" name="CollectedDate" value={formData.CollectedDate} onChange={handleChange} required/>
      </div>
      <button type="submit" className="submit-btn">Add Item</button>
    </form>
    <ToastContainer />
  </div>
  
  );
};
export default AddItems;
