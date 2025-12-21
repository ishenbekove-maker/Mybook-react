import React, { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Здесь можно добавить отправку на сервер, но для демо — просто сообщение
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="contacts-page">
      <div className="container">
        <h1 className="page-title">Контакты</h1>

        <div className="contacts-grid">
          <div className="contact-info">
            <h2>Связаться с нами</h2>
            <div className="contact-item">
              <strong>Email:</strong> artur.it223@gmail.com
            </div>
            <div className="contact-item">
              <strong>Телефон:</strong> +996 999 123 456
            </div>
            <div className="contact-item">
              <strong>Telegram:</strong> @artur_it223
            </div>
            <div className="contact-item">
              <strong>Instagram:</strong> @artur.books
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong> github.com/ТВОЙ_НИК
            </div>
          </div>

          <div className="contact-form-card">
            <h2>Обратная связь</h2>
            {submitted ? (
              <div className="success-message">
                Спасибо! Ваше сообщение отправлено.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="submit-btn">
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}