import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    age: ''
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    if (form.age < 13) {
      setError('Возраст должен быть не менее 13 лет');
      return;
    }

    try {
      await register(form);
      navigate('/profile');
    } catch (err) {
      setError(err.message || 'Ошибка при регистрации');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Регистрация</h1>
        <p className="auth-subtitle">Создайте аккаунт и начните покупать книги!</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label>ФИО</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="ФИО" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="example@mail.com" />
          </div>

          <div className="input-group">
            <label>Пароль</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required minLength="6" placeholder="Минимум 6 символов" />
          </div>

          <div className="input-group">
            <label>Подтвердите пароль</label>
            <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Телефон</label>
            <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+996 999 123 456" />
          </div>

          <div className="input-group">
            <label>Возраст</label>
            <input type="number" name="age" value={form.age} onChange={handleChange} required min="13" placeholder="18" />
          </div>

          <button type="submit" className="auth-btn primary">
            Зарегистрироваться
          </button>
        </form>

        <p className="auth-link">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>
      </div>
    </div>
  );
}