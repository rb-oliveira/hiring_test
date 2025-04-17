import React, { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data.message || 'Error registering');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
        {message && <p className={styles.message}>{message}</p>}

        <div className={styles.link} onClick={handleLoginRedirect}>
          Already have an account? Login
        </div>
      </form>
    </div>
  );
};

export default Register;