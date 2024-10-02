// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services';
import Actions from './components/Actions';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
