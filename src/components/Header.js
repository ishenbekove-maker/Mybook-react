import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">BooksApp</Link>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/books">Книги</Link>
          <Link to="/about">О проекте</Link>
        </nav>
      </div>
    </header>
  );
}