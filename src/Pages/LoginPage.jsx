// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarAuth from '../Components/NavbarAuth';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    // Ajouter ici la logique d'authentification
    console.log(formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <NavbarAuth />
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4">Sign in</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" name="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe:</label>
              <input type="password" name="password" className="form-control" id="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100 mb-3">Connexion</button>
            <Link to="/register" className="btn btn-primary d-block w-100">Register</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


