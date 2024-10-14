import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../Styles/Registeradmin.css';

const Addcommittemember = () => {
  const [formData, setFormData] = useState({
    AdminID:'',
    FullName:'', 
    Email:'',
    PhnNumber:'', 
    CommitteName:'',
    Address:'', 
    Password:''
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
      await axios.post('http://localhost:5000/api/committemembers/register', form);
      toast.success('User registered successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Registration failed');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Comittee Member Registration</h2>
        <div className="form-group">
          <label>Admin Id</label>
          <input type="text" name=" AdminID" value={formData. AdminID} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="FullName" value={formData.FullName} onChange={handleChange} required />
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
          <label>Address:</label>
          <input type="text" name="Address" value={formData.Address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="Password" value={formData.Password} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Addcommittemember;
