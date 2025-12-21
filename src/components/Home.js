import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      {/* Главный баннер */}
      <section className="hero-banner">
        <div className="hero-content">
         <h1 className="welcome-title">
  Добро пожаловать в <span className="app-name">BooksApp</span>
</h1>
          <p className="hero-subtitle">
            Современный книжный магазин на React с авторизацией, корзиной и управлением книгами
          </p>
          <div className="hero-buttons">
            <Link to="/books" className="btn-primary">
              Перейти к книгам
            </Link>
            <Link to="/register" className="btn-secondary">
              Зарегистрироваться
            </Link>
          </div>
        </div>
        <div className="hero-wave"></div>
      </section>

      {/* Блок с преимуществами */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Почему BooksApp?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Большой выбор</h3>
              <p>Классика мировой литературы и современные бестселлеры</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Безопасность</h3>
              <p>Регистрация и вход для сохранения вашей корзины</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛒</div>
              <h3>Удобная корзина</h3>
              <p>Добавляйте книги и оформляйте заказ в пару кликов</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌙</div>
              <h3>Тёмная тема</h3>
              <p>Комфортное чтение в любое время суток</p>
            </div>
          </div>
        </div>
      </section>

      {/* Блок статистики */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Книг в каталоге</p>
            </div>
            <div className="stat-item">
              <h3>10 000+</h3>
              <p>Счастливых читателей</p>
            </div>
            <div className="stat-item">
              <h3>5.0</h3>
              <p>Средний рейтинг</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}