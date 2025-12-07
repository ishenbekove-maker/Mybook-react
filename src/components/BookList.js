import React from 'react';
import { Link } from 'react-router-dom';

const books = [
  { id: 1, title: "1984", author: "Джордж Оруэлл", year: 1949, rating: "9.2", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348990566i/5470.jpg" },
  { id: 2, title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1937, rating: "9.1", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1459355986i/117833.jpg" },
  { id: 3, title: "Преступление и наказание", author: "Фёдор Достоевский", year: 1866, rating: "9.0", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg" },
  { id: 4, title: "Маленький принц", author: "Антуан де Сент-Экзюпери", year: 1943, rating: "8.9", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545447i/157993.jpg" },
  { id: 5, title: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", year: 1997, rating: "8.8", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/72193.jpg" },
  { id: 6, title: "Война и мир", author: "Лев Толстой", year: 1869, rating: "9.3", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1407105353i/656.jpg" },
];

export default function BookList() {
  return (
    <div className="container">
      <h1>Классика литературы</h1>
      <div className="books-grid">
        {books.map(book => (
          <Link key={book.id} to={`/book/${book.id}`} className="book-card">
            <img src={book.cover} alt={book.title} />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p className="rating">★ {book.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}