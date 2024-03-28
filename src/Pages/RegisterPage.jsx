import React, { useState } from 'react';
import NavbarAuth from '../Components/NavbarAuth';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique de traitement du formulaire
    console.log(formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <NavbarAuth />
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Name:</label>
              <input type="text" name="name" className="form-control" id="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input type="text" name="username" className="form-control" id="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" name="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" name="password" className="form-control" id="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
              <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
          <p className="forgot-password text-center mt-2">
          <a href="#">Forget Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
