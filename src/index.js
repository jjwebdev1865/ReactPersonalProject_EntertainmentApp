import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from './routes/movies';
import Shows from './routes/shows';
import Books from './routes/books';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='movies' element={<Movies />} />
      <Route path='shows' element={<Shows />} />
      <Route path='books' element={<Books />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
