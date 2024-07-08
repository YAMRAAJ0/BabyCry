import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminPanel from './components/AdminPanel';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';
import Login from './components/Login';
import Slider from './components/slider';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Slider/>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductList />} roles={['buyer', 'seller']} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/" element={<ProductList />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
