import React from 'react';
import { useParams, Link } from 'react-router-dom';

const books = {
  1: { title: "1984", author: "Антиутопия о тоталитарном мире", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348990566i/5470.jpg" },
  2: { title: "Мастер и Маргарита", description: "Дьявол в Москве. Шедевр Булгакова", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1459355986i/117833.jpg" },
  3: { title: "Преступление и наказание", description: "Психологический роман о совести и наказании", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg" },
  4: { title: "Маленький принц", description: "Философская сказка о дружбе и смысле жизни", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545447i/157993.jpg" },
  5: { title: "Гарри Поттер", description: "Мальчик-волшебник и его приключения", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/72193.jpg" },
  6: { title: "Война и мир", description: "Эпопея о судьбах России", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1407105353i/656.jpg" },
};

export default function BookDetail() {
  const { id } = useParams();
  const book = books[id] || { title: "Книга не найдена" };

  return (
    <div className="container detail">
      <Link to="/books" className="back-btn">← Назад</Link>
      <div className="detail-card">
        <img src={book.cover} alt={book.title} />
        <div className="detail-info">
          <h1>{book.title}</h1>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
}