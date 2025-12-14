import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>Добро пожаловать в <span>BooksApp</span></h1>
        <p>Лучшие книги всех времён и народов</p>
        <Link to="/books" className="btn-primary">Открыть библиотеку</Link>
      </div>
    </div>
  );
}