import React from 'react';

export default function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  };

  React.useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-theme');
    }
  }, []);

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      🌙 / ☀️
    </button>
  );
}