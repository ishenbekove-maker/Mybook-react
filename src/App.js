import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import About from './components/About';
import Basket from './components/Basket'; // Новый компонент корзины
import './App.css';

function App() {
  const [basket, setBasket] = useState([]);

  // Загружаем корзину из localStorage при запуске
  useEffect(() => {
    const savedBasket = localStorage.getItem('bookBasket');
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, []);

  // Сохраняем корзину в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('bookBasket', JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (book) => {
    const existing = basket.find(item => item.id === book.id);
    if (existing) {
      setBasket(basket.map(item => 
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setBasket([...basket, { ...book, quantity: 1 }]);
    }
    alert(`${book.title} добавлена в корзину!`);
  };
const removeFromBasket = (id) => {
  setBasket(prevBasket => prevBasket.filter(item => item.id !== id));
};

 const updateQuantity = (id, newQuantity) => {
  if (newQuantity <= 0) {
    setBasket(prevBasket => prevBasket.filter(item => item.id !== id));
  } else {
    setBasket(prevBasket => prevBasket.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  }
};

  return (
    <Router>
      <div className="App">
        <Header basketCount={basket.reduce((sum, item) => sum + item.quantity, 0)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList addToBasket={addToBasket} />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/basket" element={<Basket basket={basket} removeFromBasket={removeFromBasket} updateQuantity={updateQuantity} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;