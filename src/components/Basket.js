import React from 'react';
import { Link } from 'react-router-dom';

export default function Basket({ basket, removeFromBasket, updateQuantity }) {
  if (basket.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '120px 20px' }}>
        <h1>Корзина пустая</h1>
        <p style={{ fontSize: '1.5rem', color: '#aaa', margin: '2rem 0' }}>
          Добавьте книги из каталога
        </p>
        <Link 
          to="/books" 
          style={{
            padding: '15px 40px',
            background: 'linear-gradient(45deg, #6b48ff, #4ecdc4)',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1.3rem',
            fontWeight: 'bold'
          }}
        >
          Перейти к книгам
        </Link>
      </div>
    );
  }

  const totalPrice = basket.reduce((sum, item) => sum + (item.quantity || 1) * 500, 0);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Корзина ({basket.reduce((sum, item) => sum + (item.quantity || 1), 0)} книг)
      </h1>

      <div className="books-grid">
        {basket.map(item => (
          <div key={item.id} className="book-card" style={{ position: 'relative' }}>
            <img 
              src={item.cover} 
              alt={item.title} 
              style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px 20px 0 0' }}
            />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ textAlign: 'center', color: '#aaa' }}>{item.author}</p>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '15px', 
                margin: '1rem 0' 
              }}>
                <button 
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                  style={{ padding: '8px 16px', fontSize: '1.5rem', background: '#444', color: 'white', border: 'none', borderRadius: '8px' }}
                >
                  -
                </button>
                <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                  {item.quantity || 1}
                </span>
                <button 
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                  style={{ padding: '8px 16px', fontSize: '1.5rem', background: '#444', color: 'white', border: 'none', borderRadius: '8px' }}
                >
                  +
                </button>
              </div>

              <p style={{ textAlign: 'center', color: '#4ecdc4', fontWeight: 'bold', fontSize: '1.3rem' }}>
                {( (item.quantity || 1) * 500 ).toLocaleString()} сом
              </p>

              <button 
                onClick={() => removeFromBasket(item.id)}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0 0 20px 20px',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  marginTop: '0.5rem'
                }}
              >
                Удалить из корзины
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'rgba(30,30,60,0.8)', borderRadius: '20px' }}>
        <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Итого: <strong style={{ color: '#4ecdc4' }}>{totalPrice.toLocaleString()} сом</strong>
        </p>
        <button 
          onClick={() => alert('Заказ успешно оформлен! Спасибо за покупку 📚')}
          style={{
            padding: '18px 60px',
            background: 'linear-gradient(45deg, #6b48ff, #4ecdc4)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(78,205,196,0.4)'
          }}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}