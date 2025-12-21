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
      navigate('/');
    } catch (err) {
      setError(err.message || 'Ошибка регистрации');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Регистрация</h1>
        <p className="auth-subtitle">Присоединяйтесь к BooksApp!</p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label>ФИО</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="ФИО" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="example@mail.com" required />
          </div>

          <div className="input-group">
            <label>Пароль</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Минимум 6 символов" required minLength="6" />
          </div>

          <div className="input-group">
            <label>Подтвердите пароль</label>
            <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Телефон</label>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="+996 999 123 456" required />
          </div>

          <div className="input-group">
            <label>Возраст</label>
            <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="18" required min="13" />
          </div>

          <button type="submit" className="auth-btn">
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