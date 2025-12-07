import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '120px 20px',
      background: 'linear-gradient(135deg, #0f0f23, #1a1a2e)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div className="container">
        <h1 style={{
          fontSize: '5rem',
          marginBottom: '2rem',
          background: 'linear-gradient(45deg, #6b48ff, #4ecdc4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          BooksApp
        </h1>
        <p style={{
          fontSize: '2rem',
          marginBottom: '3rem',
          color: '#aaa'
        }}>
          Лучшие книги всех времён в одном месте
        </p>
        <Link 
          to="/books" 
          style={{
            padding: '18px 60px',
            background: 'linear-gradient(45deg, #6b48ff, #4ecdc4)',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1.6rem',
            fontWeight: 'bold',
            boxShadow: '0 15px 35px rgba(78,205,196,0.4)',
            transition: '0.3s'
          }}
          onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.target.style.transform = 'scale(1)'}
        >
          Открыть библиотеку
        </Link>
      </div>
    </div>
  );
}