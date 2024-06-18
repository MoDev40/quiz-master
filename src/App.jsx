import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalLayout from './components/GlobalLayout';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PlaygroundPage from './pages/PlaygroundPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="playground" element={<PlaygroundPage />} />
        </Route>
      </Routes>
  );
}

export default App;
