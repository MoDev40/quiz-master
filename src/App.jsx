import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import GlobalLayout from './components/GlobalLayout';
import Home from './components/Home';
import Playground from './components/Playground';

function App() {
  return (
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="playground" element={<Playground />} />
        </Route>
      </Routes>
  );
}

export default App;
