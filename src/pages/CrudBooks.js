import React, { useState, useEffect } from 'react';

export default function CrudBooks() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: '', author: '', year: '', genre: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('crudBooks');
    if (saved) {
      setBooks(JSON.parse(saved));
    } else {
      const defaultBooks = [
        { id: 1, title: "1984", author: "Джордж Оруэлл", year: "1949", genre: "Антиутопия" },
        { id: 2, title: "Мастер и Маргарита", author: "Михаил Булгаков", year: "1937", genre: "Фэнтези" },
        { id: 3, title: "Преступление и наказание", author: "Фёдор Достоевский", year: "1866", genre: "Роман" },
      ];
      setBooks(defaultBooks);
      localStorage.setItem('crudBooks', JSON.stringify(defaultBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('crudBooks', JSON.stringify(books));
  }, [books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setBooks(books.map(b => b.id === editingId ? { ...b, ...form } : b));
      setEditingId(null);
    } else {
      const newBook = { id: Date.now(), ...form };
      setBooks([...books, newBook]);
    }
    setForm({ title: '', author: '', year: '', genre: '' });
  };

  const editBook = (book) => {
    setForm(book);
    setEditingId(book.id);
  };

  const deleteBook = (id) => {
    if (window.confirm('Удалить книгу?')) {
      setBooks(books.filter(b => b.id !== id));
    }
  };

  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>
        Управление книгами (CRUD)
      </h1>

      {/* Форма добавления/редактирования */}
      <div style={{
        background: 'rgba(30,30,60,0.9)',
        padding: '30px',
        borderRadius: '20px',
        maxWidth: '600px',
        margin: '0 auto 60px'
      }}>
        <h2>{editingId ? 'Редактировать книгу' : 'Добавить книгу'}</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
          <input
            placeholder="Название"
            value={form.title}
            onChange={e => setForm({...form, title: e.target.value})}
            required
            style={{ padding: '15px', borderRadius: '12px', border: 'none', background: '#2a2a40', color: 'white' }}
          />
          <input
            placeholder="Автор"
            value={form.author}
            onChange={e => setForm({...form, author: e.target.value})}
            required
            style={{ padding: '15px', borderRadius: '12px', border: 'none', background: '#2a2a40', color: 'white' }}
          />
          <input
            placeholder="Год"
            value={form.year}
            onChange={e => setForm({...form, year: e.target.value})}
            required
            style={{ padding: '15px', borderRadius: '12px', border: 'none', background: '#2a2a40', color: 'white' }}
          />
          <input
            placeholder="Жанр"
            value={form.genre}
            onChange={e => setForm({...form, genre: e.target.value})}
            required
            style={{ padding: '15px', borderRadius: '12px', border: 'none', background: '#2a2a40', color: 'white' }}
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="submit" style={{
              flex: 1,
              padding: '15px',
              background: 'linear-gradient(45deg, #6b48ff, #4ecdc4)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontWeight: 'bold'
            }}>
              {editingId ? 'Сохранить' : 'Добавить'}
            </button>
            {editingId && (
              <button type="button" onClick={() => {
                setEditingId(null);
                setForm({ title: '', author: '', year: '', genre: '' });
              }} style={{
                padding: '15px',
                background: '#444',
                color: 'white',
                border: 'none',
                borderRadius: '50px'
              }}>
                Отмена
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Список книг */}
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Список книг</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {books.map(book => (
          <div key={book.id} style={{
            background: 'rgba(30,30,60,0.8)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
          }}>
            <h3 style={{ color: '#4ecdc4', marginBottom: '1rem' }}>{book.title}</h3>
            <p><strong>Автор:</strong> {book.author}</p>
            <p><strong>Год:</strong> {book.year}</p>
            <p><strong>Жанр:</strong> {book.genre}</p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '10px' }}>
              <button onClick={() => editBook(book)} style={{
                flex: 1,
                padding: '10px',
                background: '#4ecdc4',
                color: 'white',
                border: 'none',
                borderRadius: '30px'
              }}>
                Редактировать
              </button>
              <button onClick={() => deleteBook(book.id)} style={{
                flex: 1,
                padding: '10px',
                background: '#ff6b6b',
                color: 'white',
                border: 'none',
                borderRadius: '30px'
              }}>
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}