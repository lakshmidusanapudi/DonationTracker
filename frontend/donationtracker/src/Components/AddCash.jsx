import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../Styles/Registeradmin.css';

const AddCash = () => {
  const [formData, setFormData] = useState({
    Devotte: '',
    PhnNumber: '',
    Email: '',
    Amount: '',
    TransactionMode: '',
    CommitteName: '',
    CollectedBy: '',
    CollectedDate: ''
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
      await axios.post('http://localhost:5000/collection/cash', form);
      toast.success('Cash addede sucessfully!');
    } catch (error) {
      console.error(error);
      toast.error('Cash added failed');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Add cash collection</h2>
        <div className="form-group">
          <label> Devotte:</label>
          <input type="text" name="FullName" value={formData. Devotte} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile No:</label>
          <input type="text" name="PhnNumber" value={formData.PhnNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Committee Name:</label>
          <input type="text" name="CommitteName" value={formData.CommitteName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Transaction Mode:</label>
          <select name="TransactionMode" value={formData.TransactionMode} onChange={handleChange} required>
            <option value="">Select Transaction Mode</option>
            <option value="Cash">Cash</option>
            <option value="Online">Online</option>
          </select>
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input type="text" name="CommitteName" value={formData.Amount} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Committe member name</label>
          <input type="password" name="Password" value={formData.CollectedBy} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Collected Date</label>
          <input type="password" name="Password" value={formData.CollectedDate} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">AddCash</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddCash;
