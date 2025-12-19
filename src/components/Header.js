import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header({ basketCount = 0 }) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">BooksApp</Link>
        
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/books">Книги</Link>
          <Link to="/basket">
            Корзина {basketCount > 0 && <span className="basket-badge">{basketCount}</span>}
          </Link>
          <Link to="/about">О проекте</Link>

          {/* Аутентификация — отдельная вкладка */}
          {currentUser ? (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ color: '#4ecdc4', fontWeight: 'bold' }}>
                Привет, {currentUser.fullName || currentUser.email}!
              </span>
              <button 
                onClick={handleLogout}
                style={{
                  background: 'none',
                  border: '2px solid #ff6b6b',
                  color: '#ff6b6b',
                  padding: '8px 16px',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Выйти
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">Вход</Link>
              <Link to="/register" style={{
                background: 'linear-gradient(45deg, #6b48ff, #4ecdc4)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>
                Регистрация
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}