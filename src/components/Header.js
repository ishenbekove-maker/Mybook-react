import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ basketCount = 0 }) {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">BooksApp</Link>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/books">Книги</Link>
          <Link to="/basket">Корзина ({basketCount})</Link>
          <Link to="/about">О проекте</Link>
        </nav>
      </div>
    </header>
  );
}