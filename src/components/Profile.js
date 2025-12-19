import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { currentUser, logout } = useAuth();

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '30px', background: 'rgba(30,30,60,0.9)', borderRadius: '20px' }}>
      <h1>Профиль</h1>
      <div style={{ background: '#2a2a40', padding: '20px', borderRadius: '15px', margin: '20px 0' }}>
        <p><strong>ФИО:</strong> {currentUser.fullName}</p>
        <p><strong>Email:</strong> {currentUser.email}</p>
        <p><strong>Телефон:</strong> {currentUser.phone}</p>
        <p><strong>Возраст:</strong> {currentUser.age}</p>
      </div>
      <button onClick={logout} style={{ padding: '15px 40px', background: '#ff6b6b', color: 'white', border: 'none', borderRadius: '50px' }}>
        Выйти
      </button>
      <Link to="/books" style={{ marginLeft: '20px', color: '#4ecdc4' }}>Перейти к книгам</Link>
    </div>
  );
}