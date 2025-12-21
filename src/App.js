import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // ← добавлено
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import About from './components/About';
import Basket from './components/Basket';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';
import CrudBooks from './pages/CrudBooks';  

function App() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const savedBasket = localStorage.getItem('bookBasket');
    if (savedBasket) setBasket(JSON.parse(savedBasket));
  }, []);

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
      removeFromBasket(id);
    } else {
      setBasket(prevBasket => prevBasket.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  return (
    <AuthProvider> {/* ← ОБЯЗАТЕЛЬНО ОБЕРНУТЬ ВСЁ В AuthProvider */}
      <Router>
        <div className="App">
          <Header basketCount={basket.reduce((sum, item) => sum + item.quantity, 0)} />
          <main>
            <Routes>
              <Route path="/crud" element={<CrudBooks />} />
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<BookList addToBasket={addToBasket} />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/basket" element={<Basket basket={basket} removeFromBasket={removeFromBasket} updateQuantity={updateQuantity} />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
